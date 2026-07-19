/* ============================================================
   Interactions: theme toggle, mobile nav, scroll-spy,
   reveal-on-scroll, copy-email, footer year.
   ============================================================ */

(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* ---------- footer year ---------- */
  var year = doc.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- theme toggle ---------- */
  var themeBtn = doc.querySelector(".theme-toggle");
  var themeMeta = doc.getElementById("meta-theme-color");

  function applyTheme(mode) {
    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (themeBtn) {
      themeBtn.setAttribute("aria-label",
        mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
    if (themeMeta) {
      themeMeta.setAttribute("content", mode === "dark" ? "#151311" : "#FAF9F7");
    }
  }

  if (themeBtn) {
    // reflect whatever the pre-paint script decided
    applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode etc. */ }
    });
  }

  /* ---------- mobile nav ---------- */
  var nav = doc.querySelector(".site-nav");
  var navToggle = doc.querySelector(".nav-toggle");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
        navToggle.focus();
      }
    });
    doc.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target) && e.target !== navToggle) {
        closeNav();
      }
    });
  }

  /* ---------- scroll-spy (highlight current section in nav) ---------- */
  var navLinks = Array.prototype.slice.call(doc.querySelectorAll(".nav-menu a[href^='#']"));
  var spied = navLinks
    .map(function (a) { return doc.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  var hero = doc.querySelector(".hero");
  if ("IntersectionObserver" in window && spied.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var inHero = entry.target === hero;
        navLinks.forEach(function (a) {
          a.classList.toggle("active",
            !inHero && a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    spied.forEach(function (s) { spy.observe(s); });
    if (hero) spy.observe(hero);
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = doc.querySelectorAll("[data-reveal]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealEls.forEach(function (n) { n.classList.add("revealed"); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
    revealEls.forEach(function (n) { revealer.observe(n); });
  }

  /* ---------- copy email ---------- */
  var copyBtn = doc.querySelector(".copy-email");
  var copyStatus = doc.querySelector(".copy-status");

  if (copyBtn) {
    var originalLabel = copyBtn.textContent;

    // Fallback for browsers/contexts where the Clipboard API is unavailable or denied
    function legacyCopy(text) {
      var ta = doc.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      doc.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = doc.execCommand("copy"); } catch (e) { /* ignore */ }
      doc.body.removeChild(ta);
      return ok;
    }

    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-email") || "";
      function done(ok) {
        copyBtn.textContent = ok ? "Copied ✓" : "Copy failed";
        if (copyStatus) copyStatus.textContent = ok ? "Email address copied" : "Copy failed";
        setTimeout(function () {
          copyBtn.textContent = originalLabel;
          if (copyStatus) copyStatus.textContent = "";
        }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          function () { done(true); },
          function () { done(legacyCopy(email)); }
        );
      } else {
        done(legacyCopy(email));
      }
    });
  }
})();
