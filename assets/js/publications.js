/**
 * Publications page logic — Yuehan Shi academic website V1
 * Full publication list grouped by status with accessible filters.
 * Original implementation; reuses I18N for labels and PUBS for data.
 */
(function () {
  "use strict";

  var I18N = window.I18N;
  var PUBS = window.PUBS;
  if (!I18N || !PUBS) return;

  var currentLang = window.DEFAULT_LANG || "en";
  var activeFilter = "all";

  function D() { return I18N[currentLang]; }

  function escapeHTML(s) {
    if (!s) return "";
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function escapeAttr(s) {
    if (!s) return "";
    return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ------------------------------------------------------------------
     Rendering
     ------------------------------------------------------------------ */
  function highlightSelf(authorStr) {
    var escaped = escapeHTML(authorStr);
    return escaped.replace(/(Y\.\s*Shi)/g, '<span class="author-self">$1</span>');
  }

  function renderPubRow(pub) {
    var d = D();
    var row = document.createElement("article");
    row.className = "pub-row";
    row.dataset.status = pub.status;

    var statusLabel = (d.statusLabels || {})[pub.status] || pub.status;
    var rankLabel = pub.rank ? (d.rankLabels || {})[pub.rank] || pub.rank : null;

    var html = '<div class="pub-year">' + (pub.year || "") + "</div>";
    html += '<div class="pub-body">';
    html += '<h3 class="pub-title">' + escapeHTML(pub.title) + "</h3>";
    if (pub.authors) {
      html += '<p class="pub-authors">' + highlightSelf(pub.authors) + "</p>";
    }
    if (pub.venue && pub.venue.full) {
      html += '<p class="pub-venue">' + escapeHTML(pub.venue.full) + "</p>";
    }
    html += '<div class="pub-badges">';
    html += '<span class="status-badge status-' + escapeAttr(pub.status) + '">' + escapeHTML(statusLabel) + "</span>";
    if (rankLabel) {
      html += '<span class="rank-badge">' + escapeHTML(rankLabel) + "</span>";
    }
    html += "</div></div>";

    row.innerHTML = html;
    return row;
  }

  function renderGroups() {
    var d = D();
    var order = ["accepted", "under-review", "in-preparation"];

    order.forEach(function (status) {
      var list = document.getElementById("pub-list-" + status);
      if (!list) return;
      clear(list);

      PUBS.data
        .filter(function (p) { return p.status === status; })
        .forEach(function (pub) { list.appendChild(renderPubRow(pub)); });

      var headingEl = document.getElementById("group-" + status);
      if (headingEl && d.pubPage && d.pubPage.groups) {
        headingEl.textContent = d.pubPage.groups[status];
      }
    });

    applyFilter(activeFilter);
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  /* ------------------------------------------------------------------
     Filters
     ------------------------------------------------------------------ */
  function applyFilter(filter) {
    activeFilter = filter;

    document.querySelectorAll(".pub-group").forEach(function (group) {
      var visible = filter === "all" || filter === group.dataset.status;
      group.hidden = !visible;
    });

    document.querySelectorAll(".pub-filter").forEach(function (btn) {
      var isActive = btn.dataset.filter === filter;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    updateCount();
  }

  function updateCount() {
    var d = D();
    var count = PUBS.data.filter(function (p) {
      return activeFilter === "all" || p.status === activeFilter;
    }).length;
    var countEl = document.getElementById("pub-count");
    if (countEl && d.pubPage) {
      countEl.textContent = count + " " + d.pubPage.countLabel;
    }
  }

  function initFilters() {
    document.querySelectorAll(".pub-filter").forEach(function (btn) {
      btn.addEventListener("click", function () { applyFilter(btn.dataset.filter); });
    });
  }

  /* ------------------------------------------------------------------
     Page chrome
     ------------------------------------------------------------------ */
  function renderPageHeader() {
    var d = D();
    if (!d.pubPage) return;
    document.getElementById("pub-back-link").textContent = d.pubPage.backToHome;
    document.getElementById("pub-page-title").textContent = d.pubPage.title;
    document.getElementById("pub-page-subtitle").textContent = d.pubPage.subtitle;
  }

  function renderFilterLabels() {
    var d = D();
    if (!d.pubPage || !d.pubPage.filters) return;
    document.querySelectorAll(".pub-filter").forEach(function (btn) {
      var key = btn.dataset.filter;
      if (d.pubPage.filters[key]) btn.textContent = d.pubPage.filters[key];
    });
  }

  function renderNav() {
    var d = D();
    var navLinks = document.getElementById("nav-links");
    var mobileMenu = document.getElementById("mobile-menu");
    if (!navLinks || !mobileMenu) return;

    clear(navLinks);
    clear(mobileMenu);

    var navItems = [
      { label: d.nav[0].label, href: "./index.html#updates" },
      { label: d.nav[1].label, href: "./publications.html" },
      { label: d.nav[2].label, href: "./index.html#research" },
      { label: d.nav[3].label, href: "./index.html#projects" },
      { label: d.nav[4].label, href: "./index.html#education" },
      { label: d.nav[5].label, href: "./index.html#experience" },
      { label: d.nav[6].label, href: "./index.html#contact" },
    ];

    navItems.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (item.href.indexOf("publications.html") !== -1) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
      navLinks.appendChild(a);

      var ma = document.createElement("a");
      ma.href = item.href;
      ma.textContent = item.label;
      mobileMenu.appendChild(ma);
    });
  }

  function renderSideRails() {
    var d = D();
    var sideSocial = document.getElementById("side-social");
    var sideEmail = document.getElementById("side-email");
    clear(sideSocial);
    clear(sideEmail);

    var gh = d.links.github;
    var a = document.createElement("a");
    a.href = gh.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", gh.label);
    a.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.12 0 1.54-.01 2.78-.01 3.16 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';
    sideSocial.appendChild(a);

    var ea = document.createElement("a");
    ea.href = "mailto:" + d.profile.email;
    ea.textContent = d.profile.email;
    sideEmail.appendChild(ea);
  }

  function renderFooter() {
    var el = document.getElementById("footer-text");
    if (el) el.textContent = D().footer;
  }

  /* ------------------------------------------------------------------
     Language switching
     ------------------------------------------------------------------ */
  function updateLangToggle() {
    var btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.querySelector(".lang-en").classList.toggle("lang-active", currentLang === "en");
    btn.querySelector(".lang-zh").classList.toggle("lang-active", currentLang === "zh");
    btn.setAttribute("aria-pressed", currentLang === "zh" ? "true" : "false");
  }

  function renderAll() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    renderPageHeader();
    renderNav();
    renderFilterLabels();
    renderGroups();
    renderSideRails();
    renderFooter();
    updateLangToggle();
  }

  function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    try { localStorage.setItem("site-lang", lang); } catch (e) { /* noop */ }
    renderAll();
  }

  function initMobileMenu() {
    var toggle = document.getElementById("nav-toggle");
    var mobileMenu = document.getElementById("mobile-menu");
    if (!toggle || !mobileMenu) return;

    toggle.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    mobileMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileMenu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        mobileMenu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initNavScroll() {
    var nav = document.getElementById("nav");
    if (!nav) return;
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     Init
     ------------------------------------------------------------------ */
  function init() {
    try {
      var saved = localStorage.getItem("site-lang");
      if (saved === "zh" || saved === "en") currentLang = saved;
    } catch (e) { /* noop */ }

    renderAll();
    initFilters();
    initMobileMenu();
    initNavScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
