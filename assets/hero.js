/* ───────────────────────────────────────────────────────────────
   The home page animation.

   An earthquake happens south-west of the array. The P wavefront
   leaves first and the S follows more slowly. As each front reaches
   a station, that station's trace begins to move and a pick appears.
   The delay between stations is the wave crossing the ground.

   Station coordinates are the real short-period network at
   Bolshe-Bannye: twenty stations spanning 6.85 by 1.65 km.
   ─────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var STA = [
    ["BSP08",-3.115,-0.662],["BSP09",-3.072,-0.091],["BSP10",-3.013,0.455],
    ["BSP11",-2.763,-0.349],["BSP12",-2.329,-0.290],["BSP13",-1.853,-0.239],
    ["BSP14",-1.493,-0.217],["BSP16",-0.785,-0.017],["BSP18",-0.446,0.073],
    ["BSP19",-0.161,-0.405],["BSP20", 0.029, 0.050],["BSP23", 0.590,-0.342],
    ["BSP24", 0.684,-0.185],["BSP26", 1.348,-0.335],["BSP27", 1.826, 0.085],
    ["BSP28", 2.127, 0.245],["BSP29", 2.567, 0.215],["BSP30", 2.886, 0.473],
    ["BSP31", 3.367, 0.617],["BSP32", 3.750, 0.994]
  ];
  // event, south-west of the array, 3 km deep
  var EV = { x: -5.6, y: -4.1, z: 3.0 };
  var VP = 5.5, VS = 3.2;          // km/s
  var SLOW = 1.8;                  // playback is this many times slower than real
  var SHOWN = ["BSP08","BSP11","BSP14","BSP18","BSP20","BSP24","BSP28","BSP32"];

  var cv = document.getElementById("hero-canvas");
  if (!cv) return;
  var ctx = cv.getContext("2d");

  // palette, read from the stylesheet so the two never drift
  var cs = getComputedStyle(document.documentElement);
  var INK   = cs.getPropertyValue("--ink").trim()   || "#15202B";
  var SOFT  = cs.getPropertyValue("--soft").trim()  || "#52606B";
  var FAINT = cs.getPropertyValue("--faint").trim() || "#8792A0";
  var RULE  = cs.getPropertyValue("--rule").trim()  || "#D3DAE0";
  var P_COL = cs.getPropertyValue("--P").trim()     || "#B03A2E";
  var S_COL = cs.getPropertyValue("--S").trim()     || "#1F618D";
  var PANEL = cs.getPropertyValue("--panel").trim() || "#FFFFFF";

  // travel times
  STA.forEach(function (s) {
    var dx = s[1] - EV.x, dy = s[2] - EV.y;
    var d = Math.sqrt(dx * dx + dy * dy + EV.z * EV.z);
    s.push(d, d / VP, d / VS);          // [3]=dist [4]=tP [5]=tS
  });
  var tMax = Math.max.apply(null, STA.map(function (s) { return s[5]; }));
  var DUR  = (tMax + 1.6) * SLOW * 1000;     // one pass, ms
  var HOLD = 2200;

  // deterministic noise so every reload looks the same
  function rnd(seed) {
    var a = seed * 9301 + 49297;
    return ((a % 233280) / 233280) * 2 - 1;
  }
  function wavelet(u, f, decay) {         // u = seconds since arrival
    if (u < 0) return 0;
    return Math.sin(2 * Math.PI * f * u) * Math.exp(-decay * u);
  }

  var W = 0, H = 0, DPR = 1;
  function resize() {
    var r = cv.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(640, Math.round(r.width));
    H = Math.round(Math.max(230, Math.min(330, r.width * 0.30)));
    cv.width = W * DPR; cv.height = H * DPR;
    cv.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function draw(t) {                       // t = seconds of model time
    ctx.clearRect(0, 0, W, H);

    var pad = 16;
    var mapW = Math.round(W * 0.34);
    var gap  = 26;
    var trX0 = mapW + gap, trW = W - trX0 - pad;

    /* ---------- map panel ---------- */
    var exX = [-8.4, 5.6], exY = [-5.6, 2.6];
    var sx = (mapW - pad * 2) / (exX[1] - exX[0]);
    var sy = (H - pad * 2) / (exY[1] - exY[0]);
    var sc = Math.min(sx, sy);
    var ox = pad + (mapW - pad * 2 - (exX[1] - exX[0]) * sc) / 2;
    var oy = pad + (H - pad * 2 - (exY[1] - exY[0]) * sc) / 2;
    function MX(x) { return ox + (x - exX[0]) * sc; }
    function MY(y) { return H - oy - (y - exY[0]) * sc; }

    ctx.save();
    ctx.beginPath(); ctx.rect(pad - 6, pad - 10, mapW - pad * 2 + 12, H - pad * 2 + 20);
    ctx.clip();

    // wavefronts
    [[VS, S_COL], [VP, P_COL]].forEach(function (w) {
      var r = w[0] * t;
      if (r <= 0) return;
      var fade = Math.max(0, 1 - r / 15);
      ctx.beginPath();
      ctx.arc(MX(EV.x), MY(EV.y), r * sc, 0, Math.PI * 2);
      ctx.strokeStyle = w[1];
      ctx.globalAlpha = 0.16 + 0.5 * fade;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    // stations
    STA.forEach(function (s) {
      var X = MX(s[1]), Y = MY(s[2]);
      var hitP = t >= s[4], hitS = t >= s[5];
      ctx.beginPath();
      ctx.moveTo(X, Y - 4.2); ctx.lineTo(X + 3.8, Y + 2.6); ctx.lineTo(X - 3.8, Y + 2.6);
      ctx.closePath();
      ctx.lineWidth = 1;
      if (hitS)      { ctx.fillStyle = S_COL; ctx.fill(); }
      else if (hitP) { ctx.fillStyle = P_COL; ctx.fill(); }
      else           { ctx.fillStyle = PANEL; ctx.fill(); ctx.strokeStyle = FAINT; ctx.stroke(); }
    });

    // source
    var ex = MX(EV.x), ey = MY(EV.y);
    ctx.strokeStyle = INK; ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(ex - 4.5, ey); ctx.lineTo(ex + 4.5, ey);
    ctx.moveTo(ex, ey - 4.5); ctx.lineTo(ex, ey + 4.5);
    ctx.stroke();
    ctx.restore();

    ctx.font = "10px 'IBM Plex Mono', monospace";
    ctx.fillStyle = FAINT; ctx.textAlign = "left";
    ctx.fillText("20 stations · 6.9 × 1.7 km", pad, H - 4);

    // divider
    ctx.beginPath();
    ctx.moveTo(mapW + gap / 2, 10); ctx.lineTo(mapW + gap / 2, H - 10);
    ctx.strokeStyle = RULE; ctx.lineWidth = 1; ctx.stroke();

    /* ---------- trace panel ---------- */
    var rows = SHOWN.map(function (n) {
      return STA.filter(function (s) { return s[0] === n; })[0];
    }).filter(Boolean);
    var top = 14, bot = H - 20;
    var lane = (bot - top) / rows.length;
    var amp = Math.min(lane * 0.40, 15);
    var labW = 34;
    var x0 = trX0 + labW, xw = trW - labW;
    var tSpan = tMax + 1.4;

    rows.forEach(function (s, i) {
      var yc = top + lane * i + lane / 2;
      ctx.font = "9.5px 'IBM Plex Mono', monospace";
      ctx.fillStyle = FAINT; ctx.textAlign = "right";
      ctx.fillText(s[0], trX0 + labW - 7, yc + 3);

      var tP = s[4], tS = s[5], N = 460;
      ctx.beginPath();
      for (var j = 0; j < N; j++) {
        var tt = tSpan * j / (N - 1);
        var vis = Math.min(tt, t);
        var v = 0;
        if (tt <= t) {
          var seed = i * 1013 + j * 7 + 3;
          v = rnd(seed) * 0.10;
          if (tt > tP) v += 0.85 * wavelet(tt - tP, 7.5, 5.0);
          if (tt > tS) v += 1.25 * wavelet(tt - tS, 4.6, 2.6);
          v += rnd(seed * 3 + 11) * 0.06 *
               (tt > tP ? Math.exp(-(tt - tP) * 0.7) * 3 + 1 : 1);
        }
        var X = x0 + xw * tt / tSpan, Y = yc - v * amp;
        if (tt > t) break;
        if (j === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
        void vis;
      }
      ctx.strokeStyle = INK; ctx.lineWidth = 0.85; ctx.stroke();

      [[tP, P_COL], [tS, S_COL]].forEach(function (pk) {
        if (t < pk[0]) return;
        var X = x0 + xw * pk[0] / tSpan;
        ctx.beginPath();
        ctx.moveTo(X, yc - amp * 1.25); ctx.lineTo(X, yc + amp * 1.25);
        ctx.strokeStyle = pk[1]; ctx.lineWidth = 1.3; ctx.stroke();
      });
    });

    // leading edge
    if (t < tSpan) {
      var lx = x0 + xw * Math.min(t, tSpan) / tSpan;
      ctx.beginPath(); ctx.moveTo(lx, top - 2); ctx.lineTo(lx, bot - 2);
      ctx.strokeStyle = RULE; ctx.lineWidth = 1; ctx.stroke();
    }

    ctx.font = "10px 'IBM Plex Mono', monospace";
    ctx.textAlign = "left"; ctx.fillStyle = FAINT;
    ctx.fillText("P", x0, H - 4);
    ctx.fillStyle = P_COL; ctx.fillRect(x0 + 10, H - 11, 14, 1.4);
    ctx.fillStyle = FAINT; ctx.fillText("S", x0 + 32, H - 4);
    ctx.fillStyle = S_COL; ctx.fillRect(x0 + 42, H - 11, 14, 1.4);
    ctx.fillStyle = FAINT;
    ctx.fillText(tSpan.toFixed(0) + " s", x0 + xw - 24, H - 4);
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var start = null, raf = null;

  function frame(ts) {
    if (start === null) start = ts;
    var e = ts - start;
    if (e <= DUR) {
      draw((e / 1000) / SLOW);
      raf = requestAnimationFrame(frame);
    } else if (e <= DUR + HOLD) {
      raf = requestAnimationFrame(frame);
    } else {
      start = ts; raf = requestAnimationFrame(frame);
    }
  }

  function stop() { if (raf) cancelAnimationFrame(raf); raf = null; }
  function go() {
    stop();
    resize();
    if (reduce.matches) { draw(tMax + 1.4); return; }
    start = null; raf = requestAnimationFrame(frame);
  }

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt); rt = setTimeout(go, 160);
  });
  if (reduce.addEventListener) reduce.addEventListener("change", go);

  // pause when scrolled away
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { if (!raf && !reduce.matches) go(); }
        else stop();
      });
    }, { threshold: 0.05 }).observe(cv);
  }
  go();
})();
