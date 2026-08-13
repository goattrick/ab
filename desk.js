/* Signal Desk — tiny client helpers (no network calls) */
(function () {
  "use strict";
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () {
    var y = document.querySelectorAll("[data-year]");
    var yr = String(new Date().getFullYear());
    for (var i = 0; i < y.length; i++) y[i].textContent = yr;

    var stamp = document.querySelectorAll("[data-build-stamp]");
    var build = "sd-" + (Date.now().toString(36)).slice(-6);
    for (var j = 0; j < stamp.length; j++) stamp[j].textContent = build;
  });
})();
