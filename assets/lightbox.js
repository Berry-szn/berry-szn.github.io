/* Click any image or video to open it in place. Escape, the backdrop or the
   close button dismisses it. Arrow keys step through the images on the page. */
(function () {
  "use strict";
  var box, fig, cap, btn, idx = -1, items = [];

  function collect() {
    items = Array.prototype.slice.call(
      document.querySelectorAll('a[data-lb]')
    );
  }

  function build() {
    box = document.createElement("div");
    box.className = "lb";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="lb-x" type="button" aria-label="Close">&#10005;</button>' +
      '<button class="lb-nav lb-prev" type="button" aria-label="Previous">&#8249;</button>' +
      '<button class="lb-nav lb-next" type="button" aria-label="Next">&#8250;</button>' +
      '<div class="lb-inner"><figure class="lb-fig"></figure>' +
      '<p class="lb-cap"></p></div>';
    document.body.appendChild(box);
    fig = box.querySelector(".lb-fig");
    cap = box.querySelector(".lb-cap");
    btn = box.querySelector(".lb-x");
    btn.addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function (e) {
      e.stopPropagation(); step(-1);
    });
    box.querySelector(".lb-next").addEventListener("click", function (e) {
      e.stopPropagation(); step(1);
    });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lb-inner")) close();
    });
  }

  function show(i) {
    if (!box) build();
    if (i < 0 || i >= items.length) return;
    idx = i;
    var a = items[i];
    var src = a.getAttribute("href");
    var text = a.getAttribute("data-cap") || "";
    var vid = /\.(mp4|webm|mov)$/i.test(src);
    fig.innerHTML = vid
      ? '<video src="' + src + '" controls autoplay loop muted playsinline></video>'
      : '<img src="' + src + '" alt="' + text.replace(/"/g, "&quot;") + '">';
    cap.textContent = text;
    cap.style.display = text ? "" : "none";
    box.classList.add("on");
    document.body.style.overflow = "hidden";
    btn.focus();
    var multi = items.length > 1;
    box.querySelector(".lb-prev").style.display = multi ? "" : "none";
    box.querySelector(".lb-next").style.display = multi ? "" : "none";
  }

  function close() {
    if (!box) return;
    box.classList.remove("on");
    fig.innerHTML = "";
    document.body.style.overflow = "";
    if (idx >= 0 && items[idx]) items[idx].focus();
    idx = -1;
  }

  function step(d) {
    if (idx < 0) return;
    show((idx + d + items.length) % items.length);
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-lb]") : null;
    if (!a) return;
    e.preventDefault();
    collect();
    show(items.indexOf(a));
  });

  document.addEventListener("keydown", function (e) {
    if (!box || !box.classList.contains("on")) return;
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
})();
