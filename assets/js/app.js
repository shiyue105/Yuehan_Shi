/**
 * Application logic — Yuehan Shi academic website V1
 * Renders bilingual content from I18N + PUBS, handles language
 * switching, navigation, scroll-spy, and section reveals.
 * Original implementation; no third-party code copied.
 */
(function () {
  "use strict";

  var I18N = window.I18N;
  var SHARED = window.SHARED;
  var PUBS = window.PUBS || { data: [], featuredIds: [] };
  if (!I18N || !SHARED) return;

  var currentLang = window.DEFAULT_LANG || "en";

  /* ------------------------------------------------------------------
     Icons (inline SVG)
     ------------------------------------------------------------------ */
  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.12 0 1.54-.01 2.78-.01 3.16 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  };

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */
  function D() { return I18N[currentLang]; }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  function escapeAttr(s) {
    if (!s) return "";
    return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ------------------------------------------------------------------
     Hero
     ------------------------------------------------------------------ */
  function renderHero() {
    var d = D();

    document.getElementById("hero-eyebrow").textContent = d.profile.eyebrow;
    document.getElementById("hero-name").textContent = d.profile.name;
    document.getElementById("hero-statement").textContent = d.profile.statement;
    document.getElementById("hero-description").textContent = d.profile.description;

    var cta = document.getElementById("hero-cta");
    clear(cta);
    var primary = el("a", "btn btn-primary", escapeHTML(d.heroCTA.primary) + " " + ICONS.arrow);
    primary.href = "#publications";
    cta.appendChild(primary);
    var secondary = el("a", "btn btn-secondary", escapeHTML(d.heroCTA.secondary));
    secondary.href = "#projects";
    cta.appendChild(secondary);

    var meta = document.getElementById("hero-meta");
    clear(meta);
    d.heroMeta.forEach(function (m) {
      var chip = el("div", "hero-meta-item");
      chip.innerHTML =
        '<span class="hero-meta-label">' + escapeHTML(m.label) + "</span>" +
        '<span class="hero-meta-value">' + escapeHTML(m.value) + "</span>";
      meta.appendChild(chip);
    });

    var loc = document.getElementById("hero-location");
    loc.innerHTML = ICONS.pin + " " + escapeHTML(d.profile.location);
  }

  function escapeHTML(s) {
    if (!s) return "";
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* ------------------------------------------------------------------
     Navigation
     ------------------------------------------------------------------ */
  function renderNav() {
    var d = D();
    var navLinks = document.getElementById("nav-links");
    var mobileMenu = document.getElementById("mobile-menu");
    clear(navLinks);
    clear(mobileMenu);

    d.nav.forEach(function (item) {
      var a = el("a", null, escapeHTML(item.label));
      a.href = item.href;
      navLinks.appendChild(a);

      var ma = el("a", null, escapeHTML(item.label));
      ma.href = item.href;
      mobileMenu.appendChild(ma);
    });
  }

  /* ------------------------------------------------------------------
     Updates
     ------------------------------------------------------------------ */
  function renderUpdates() {
    var d = D();
    document.getElementById("label-updates").textContent = d.sections.updates;
    document.getElementById("heading-updates").textContent = d.headings.updates;

    var list = document.getElementById("updates-list");
    clear(list);
    d.latestUpdates.forEach(function (item) {
      var row = el("div", "update-item");
      row.innerHTML =
        '<div class="update-date">' + escapeHTML(item.date) + "</div>" +
        '<div class="update-text">' + escapeHTML(item.text) + "</div>";
      list.appendChild(row);
    });
  }

  /* ------------------------------------------------------------------
     Publications (homepage)
     ------------------------------------------------------------------ */
  function highlightSelf(authorStr) {
    var escaped = escapeHTML(authorStr);
    var re = /(Y\.\s*Shi)/g;
    return escaped.replace(re, '<span class="author-self">$1</span>');
  }

  function renderPubRow(pub) {
    var d = D();
    var row = el("article", "pub-row");

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
    html += "</div>";
    html += "</div>";
    row.innerHTML = html;
    return row;
  }

  function renderPublicationsHome() {
    var d = D();
    var list = document.getElementById("pub-list");
    if (!list) return;

    document.getElementById("label-publications").textContent = d.sections.publications;
    document.getElementById("heading-publications").textContent = d.headings.publications;

    clear(list);
    PUBS.featuredIds.forEach(function (id) {
      var pub = PUBS.data.find(function (p) { return p.id === id; });
      if (pub) list.appendChild(renderPubRow(pub));
    });

    var viewAll = document.getElementById("pub-view-all");
    if (viewAll) {
      viewAll.innerHTML = escapeHTML(d.viewAllPublications) + " " + ICONS.arrow;
      viewAll.setAttribute("href", "./publications.html");
    }
  }

  /* ------------------------------------------------------------------
     Research interests
     ------------------------------------------------------------------ */
  function renderResearch() {
    var d = D();
    document.getElementById("label-research").textContent = d.sections.research;
    document.getElementById("heading-research").textContent = d.headings.research;

    var grid = document.getElementById("research-interests");
    clear(grid);
    d.researchInterests.forEach(function (item, i) {
      var div = el("div", "interest-item");
      div.innerHTML =
        '<div class="interest-number">' + String(i + 1).padStart(2, "0") + "</div>" +
        "<h3>" + escapeHTML(item.title) + "</h3>" +
        '<p class="interest-detail">' + escapeHTML(item.detail) + "</p>";
      grid.appendChild(div);
    });
  }

  /* ------------------------------------------------------------------
     Projects
     ------------------------------------------------------------------ */
  function renderProjects() {
    var d = D();
    document.getElementById("label-projects").textContent = d.sections.projects;
    document.getElementById("heading-projects").textContent = d.headings.projects;

    var list = document.getElementById("projects-list");
    clear(list);
    d.projects.forEach(function (p, i) {
      var item = el("article", "project-item");
      var highlights = p.highlights
        .map(function (h) { return "<li>" + escapeHTML(h) + "</li>"; })
        .join("");
      item.innerHTML =
        '<div class="project-number">' + String(i + 1).padStart(2, "0") + "</div>" +
        '<div class="project-body">' +
        '<div class="project-top">' +
        "<h3>" + escapeHTML(p.name) + "</h3>" +
        '<p class="project-period">' + escapeHTML(p.period) + "</p>" +
        "</div>" +
        '<p class="project-role">' + escapeHTML(p.role) + " &middot; " + escapeHTML(p.supervisor) + "</p>" +
        '<p class="project-summary">' + escapeHTML(p.summary) + "</p>" +
        '<ul class="project-highlights">' + highlights + "</ul>" +
        "</div>";
      list.appendChild(item);
    });
  }

  /* ------------------------------------------------------------------
     Education & honors
     ------------------------------------------------------------------ */
  function renderEducation() {
    var d = D();
    var ed = d.education;
    document.getElementById("label-education").textContent = d.sections.education;
    document.getElementById("heading-education").textContent = d.headings.education;

    var box = document.getElementById("education-box");
    box.innerHTML =
      '<div class="edu-head">' +
      "<h3>" + escapeHTML(ed.school) + "</h3>" +
      '<p class="edu-period">' + escapeHTML(ed.period) + "</p>" +
      "</div>" +
      '<p class="edu-location">' + escapeHTML(ed.location) + "</p>" +
      '<p class="edu-degree">' + escapeHTML(ed.degree) + "</p>" +
      '<p class="edu-minor">' + escapeHTML(ed.minor) + "</p>" +
      '<p class="edu-gpa">' + escapeHTML(ed.gpa) + "</p>" +
      '<p class="edu-courses"><strong>' + escapeHTML(ed.coursesLabel) + ":</strong> " + escapeHTML(ed.courses) + "</p>";

    var honors = document.getElementById("honors-list");
    clear(honors);
    document.getElementById("honors-label").textContent = ed.honorsLabel;
    ed.honors.forEach(function (h) {
      honors.appendChild(el("li", null, escapeHTML(h)));
    });
  }

  /* ------------------------------------------------------------------
     Experience
     ------------------------------------------------------------------ */
  function renderExperience() {
    var d = D();
    var ex = d.experience;
    document.getElementById("label-experience").textContent = d.sections.experience;
    document.getElementById("heading-experience").textContent = d.headings.experience;

    var wrap = document.getElementById("experience-wrap");
    clear(wrap);

    [["industry", ex.industryLabel], ["campus", ex.campusLabel]].forEach(function (pair) {
      var key = pair[0];
      var label = pair[1];
      var items = ex.items.filter(function (it) { return it.group === key; });
      if (!items.length) return;

      var sub = el("h3", "experience-sublabel", escapeHTML(label));
      wrap.appendChild(sub);

      items.forEach(function (it) {
        var bullets = it.bullets
          .map(function (b) { return "<li>" + escapeHTML(b) + "</li>"; })
          .join("");
        var item = el("article", "exp-item");
        item.innerHTML =
          '<div class="exp-head">' +
          '<div><h4 class="exp-org">' + escapeHTML(it.org) + "</h4>" +
          '<p class="exp-title">' + escapeHTML(it.title) + "</p></div>" +
          '<div class="exp-meta"><p class="exp-period">' + escapeHTML(it.period) + "</p>" +
          '<p class="exp-location">' + escapeHTML(it.location) + "</p></div>" +
          "</div>" +
          '<ul class="exp-bullets">' + bullets + "</ul>";
        wrap.appendChild(item);
      });
    });
  }

  /* ------------------------------------------------------------------
     Skills
     ------------------------------------------------------------------ */
  function renderSkills() {
    var d = D();
    document.getElementById("label-skills").textContent = d.sections.skills;
    document.getElementById("heading-skills").textContent = d.headings.skills;

    var grid = document.getElementById("skills-grid");
    clear(grid);
    d.skills.forEach(function (s) {
      var div = el("div", "skill-item");
      div.innerHTML =
        "<h3>" + escapeHTML(s.category) + "</h3>" +
        "<p>" + escapeHTML(s.items) + "</p>";
      grid.appendChild(div);
    });
  }

  /* ------------------------------------------------------------------
     Contact & footer
     ------------------------------------------------------------------ */
  function renderContact() {
    var d = D();
    document.getElementById("contact-heading").textContent = d.headings.contact;
    document.getElementById("contact-sub").textContent = d.headings.contactSub;

    var emailBtn = document.getElementById("contact-email");
    emailBtn.href = "mailto:" + d.profile.email;
    emailBtn.innerHTML = ICONS.email + " <span>" + escapeHTML(d.headings.contactBtn) + "</span>";

    var socials = document.getElementById("contact-socials");
    clear(socials);
    var gh = d.links.github;
    var a = el("a");
    a.href = gh.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = ICONS.github + " <span>" + escapeHTML(gh.label) + " &#8599;</span>";
    socials.appendChild(a);
  }

  function renderFooter() {
    document.getElementById("footer-text").textContent = D().footer;
  }

  /* ------------------------------------------------------------------
     Side rails (desktop)
     ------------------------------------------------------------------ */
  function renderSideRails() {
    var d = D();
    var sideSocial = document.getElementById("side-social");
    var sideEmail = document.getElementById("side-email");
    clear(sideSocial);
    clear(sideEmail);

    var gh = d.links.github;
    var a = el("a");
    a.href = gh.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", gh.label);
    a.innerHTML = ICONS.github;
    sideSocial.appendChild(a);

    var ea = el("a");
    ea.href = "mailto:" + d.profile.email;
    ea.textContent = d.profile.email;
    sideEmail.appendChild(ea);
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
    renderHero();
    renderNav();
    renderUpdates();
    renderPublicationsHome();
    renderResearch();
    renderProjects();
    renderEducation();
    renderExperience();
    renderSkills();
    renderContact();
    renderSideRails();
    renderFooter();
    updateLangToggle();
  }

  function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    try { localStorage.setItem("site-lang", lang); } catch (e) { /* noop */ }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    renderAll();
  }

  /* ------------------------------------------------------------------
     Interactions
     ------------------------------------------------------------------ */
  function initNavInteractions() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("nav-toggle");
    var mobileMenu = document.getElementById("mobile-menu");

    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    }, { passive: true });

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

    /* Scroll-spy */
    var sections = document.querySelectorAll("main section[id]");
    var navItems = document.querySelectorAll(".nav-links a");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navItems.forEach(function (item) {
          item.classList.toggle("active", item.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveals() {
    var targets = document.querySelectorAll(".reveal, .reveal-stagger");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(function (t) { t.classList.add("visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (t) { observer.observe(t); });
  }

  function initLangToggle() {
    var btn = document.getElementById("lang-toggle");
    btn.addEventListener("click", function () {
      switchLang(currentLang === "en" ? "zh" : "en");
    });
  }

  /* ------------------------------------------------------------------
     Init
     ------------------------------------------------------------------ */
  function init() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    renderAll();
    initNavInteractions();
    initReveals();
    initLangToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
