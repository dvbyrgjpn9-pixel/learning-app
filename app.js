(function () {
  "use strict";

  var PANELS = {
    lessons: { title: "Start Learning", text: "Lessons will appear here. This is a placeholder." },
    practice: { title: "Practice", text: "Practice activities will appear here. This is a placeholder." },
    progress: { title: "My Progress", text: "Your progress will appear here. Nothing is stored or sent anywhere." },
    about: { title: "About", text: "A simple learning app that runs entirely in your browser. No login, no tracking." }
  };

  var home = document.getElementById("home");
  var panel = document.getElementById("panel");
  var title = document.getElementById("panel-title");
  var text = document.getElementById("panel-text");
  var back = document.getElementById("back");

  function show(key) {
    var item = PANELS[key];
    if (!item) return;
    title.textContent = item.title;
    text.textContent = item.text;
    home.hidden = true;
    panel.hidden = false;
    back.focus();
    window.scrollTo(0, 0);
  }

  function showHome() {
    panel.hidden = true;
    home.hidden = false;
    window.scrollTo(0, 0);
  }

  document.querySelectorAll("[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      show(btn.getAttribute("data-target"));
    });
  });
  back.addEventListener("click", showHome);

  // Offline support (service workers need https or localhost).
  var status = document.getElementById("status");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function () {
      return navigator.serviceWorker.ready;
    }).then(function () {
      status.textContent = "Ready to use offline.";
    }).catch(function () {
      status.textContent = "";
    });
  }
})();
