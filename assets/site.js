(function () {
  "use strict";
  var S = window.SITE, T = window.TRACES || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (x) {
    return String(x == null ? "" : x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  };
  var mark = function (a) {
    return esc(a).replace(/(Agbelusi,?\s*A\.\s*J\.)/g, '<span class="me">$1</span>');
  };
  var el = function (h) { var d = document.createElement("div"); d.innerHTML = h; return d.firstElementChild; };

  /* ── chrome ─────────────────────────────────────────── */
  var PAGES = [
    ["index.html","Home"],["research.html","Research"],["publications.html","Publications"],
    ["software.html","Software"],["laboratory.html","Laboratory"],
    ["startups.html","Startups"],["gallery.html","Gallery"],["about.html","About"]
  ];
  var here = (location.pathname.split("/").pop() || "index.html");

  document.body.insertAdjacentHTML("afterbegin",
    '<a class="skip" href="#main">Skip to content</a>' +
    '<header class="site"><div class="wrap">' +
      '<a class="brand" href="index.html">' + esc(S.profile.name) +
      ' <span>· ' + esc(S.profile.role.toLowerCase()) + '</span></a>' +
      '<nav aria-label="Pages"><ul>' +
        PAGES.map(function (p) {
          return '<li><a href="' + p[0] + '"' + (p[0] === here ? ' class="on" aria-current="page"' : '') +
                 '>' + p[1] + '</a></li>';
        }).join("") +
      '</ul></nav></div></header>');

  document.body.insertAdjacentHTML("beforeend",
    '<footer class="site"><div class="wrap">' +
      '<span>' + esc(S.profile.name) + ' · ' + esc(S.profile.place) + '</span>' +
      '<span><a href="mailto:' + esc(S.profile.email) + '">Email</a> · ' +
      '<a href="' + esc(S.profile.github) + '">GitHub</a> · ' +
      (S.profile.rg ? '<a href="' + esc(S.profile.rg) + '">ResearchGate</a> · ' : '') +
      '<a href="' + esc(S.profile.cv) + '">CV</a></span>' +
    '</div></footer>');

  /* ── audio ──────────────────────────────────────────── */
  window.buildAudio = function (host) {
    if (!host || !S.audio) return;
    var cur = null;
    host.insertAdjacentHTML("beforeend", '<span class="lbl">Listen:</span>');
    S.audio.clips.forEach(function (c) {
      var b = el('<button class="play" type="button"><span class="tri"></span>' +
                 esc(c.label) + "</button>");
      var au = new Audio(c.src); au.preload = "none";
      au.addEventListener("ended", function () { b.classList.remove("on"); cur = null; });
      b.addEventListener("click", function () {
        if (cur && cur !== au) { cur.pause(); cur.currentTime = 0;
          host.querySelectorAll(".play").forEach(function (o) { o.classList.remove("on"); }); }
        if (au.paused) { au.play(); b.classList.add("on"); cur = au; }
        else { au.pause(); b.classList.remove("on"); cur = null; }
      });
      host.appendChild(b);
    });
    host.insertAdjacentHTML("afterend",
      '<p class="audio-cap">' + esc(S.audio.caption) + "</p>");
  };

  /* ── small renderers used across pages ──────────────── */
  window.render = {
    paras: function (a) { return a.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join(""); },

    gallery: function (items, cls) {
      return '<div class="gal ' + (cls || "") + '">' + items.map(function (it) {
        var src = it.vid || it.img;
        var m = it.vid
          ? '<video src="' + esc(it.vid) + '" muted loop playsinline autoplay preload="metadata"></video>'
          : '<img src="' + esc(it.img) + '" alt="' + esc(it.cap) + '" loading="lazy">';
        return '<figure><a href="' + esc(src) + '" target="_blank" rel="noopener" ' +
               'title="Open full size">' + m + "</a><figcaption>" + esc(it.cap) + "</figcaption></figure>";
      }).join("") + "</div>";
    },

    statusClass: function (s) {
      s = (s || "").toLowerCase();
      if (s.indexOf("publish") > -1) return "published";
      if (s.indexOf("review") > -1) return "review";
      if (s.indexOf("submit") > -1) return "submitted";
      return "prep";
    },

    tool: function (k) {
      var shot = k.img
        ? '<figure class="shot"><a href="' + esc(k.img) + '" target="_blank" rel="noopener" ' +
          'title="Open full size"><img src="' + esc(k.img) + '" alt="' + esc(k.n) +
          ' interface" loading="lazy"></a></figure>'
        : "";
      return '<article class="tool"><div>' +
        "<h3>" + esc(k.n) + '<span class="status ' + window.render.statusClass(k.s) + '">' +
        esc(k.s) + "</span></h3>" +
        '<p class="one">' + esc(k.one) + "</p>" +
        '<p class="d">' + esc(k.d) + "</p>" +
        '<dl class="facts">' + (k.facts || []).map(function (f) {
          return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
        }).join("") + "</dl>" +
        '<ul class="feats">' + (k.feats || []).map(function (f) {
          return "<li>" + esc(f) + "</li>";
        }).join("") + "</ul>" +
        "</div><div>" + shot +
        ((k.shots && k.shots.length) ?
          '<div class="strip">' + k.shots.map(function (u) {
            return '<a href="' + esc(u) + '" target="_blank" rel="noopener"><img src="' + esc(u) +
                   '" alt="' + esc(k.n) + ' screen" loading="lazy"></a>';
          }).join("") + "</div>" : "") +
        "</div></article>";
    },

    pub: function (it) {
      return '<article class="pub"><h3>' + esc(it.t) +
        '<span class="status ' + window.render.statusClass(it.s) + '">' + esc(it.s) + "</span></h3>" +
        '<p class="meta">' + mark(it.a) + " · <em>" + esc(it.v) + "</em>" +
        (it.y ? " · " + esc(it.y) : "") +
        (it.doi ? ' · <a href="' + esc(it.doi) + '">DOI</a>' : "") + "</p>" +
        (it.note ? '<p class="pnote">' + esc(it.note) + "</p>" : "") +
        (it.abs ? '<details class="abs"><summary>Abstract</summary>' +
          esc(it.abs).split("\n\n").map(function (p) { return "<p>" + p + "</p>"; }).join("") +
          "</details>" : "") + "</article>";
    },

    esc: esc
  };
})();
