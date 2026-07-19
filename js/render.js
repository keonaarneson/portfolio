/* ============================================================
   Renders PROJECTS and SKILL_GROUPS (from data.js) into the
   page, and syncs any [data-site-link] hrefs with SITE.
   You shouldn't need to edit this file to update content.
   ============================================================ */

(function () {
  "use strict";

  /* Small element builder — text is always set via textContent,
     so anything typed into data.js renders safely as plain text. */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  var WAVE_ICON_PATH = "M4 24 Q10 8 16 24 T28 24 T40 24 T52 24";

  function waveIcon() {
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "44");
    svg.setAttribute("height", "34");
    svg.setAttribute("viewBox", "0 0 56 48");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", WAVE_ICON_PATH);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "2.5");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
    return svg;
  }

  /* ---------- site links ---------- */

  function syncSiteLinks() {
    if (typeof SITE === "undefined") return;
    var map = {
      github: SITE.github,
      linkedin: SITE.linkedin,
      resume: SITE.resume,
      email: "mailto:" + SITE.email,
    };
    document.querySelectorAll("[data-site-link]").forEach(function (a) {
      var href = map[a.getAttribute("data-site-link")];
      if (href) a.setAttribute("href", href);
    });
    document.querySelectorAll(".email-big").forEach(function (a) {
      a.textContent = SITE.email;
    });
  }

  /* ---------- projects ---------- */

  function mediaFor(project) {
    if (project.image && project.image.src) {
      var img = el("img", {
        src: project.image.src,
        alt: project.image.alt || "",
        loading: "lazy",
      });
      var media = el("div", { class: "project-media has-image" }, [img]);
      return media;
    }
    var placeholder = el("div", { class: "media-placeholder" }, [
      waveIcon(),
      el("span", { text: "Photo / schematic — coming soon" }),
    ]);
    return el("div", { class: "project-media" }, [placeholder]);
  }

  function projectCard(p) {
    var body = el("div", { class: "project-body" });

    var meta = el("div", { class: "project-meta" });
    if (p.status) {
      meta.appendChild(el("span", { class: "status-chip", text: p.status }));
    }
    if (p.meta) {
      meta.appendChild(el("span", { class: "meta-text", text: p.meta }));
    }
    if (meta.childNodes.length) body.appendChild(meta);

    body.appendChild(el("h3", { text: p.title }));
    if (p.summary) body.appendChild(el("p", { class: "project-summary", text: p.summary }));
    if (p.description) body.appendChild(el("p", { class: "project-desc", text: p.description }));

    if (p.tools && p.tools.length) {
      body.appendChild(
        el("ul", { class: "chip-list project-tools", "aria-label": "Tools used" },
          p.tools.map(function (t) { return el("li", { class: "chip", text: t }); }))
      );
    }

    var linksWrap = el("div", { class: "project-links" });
    if (p.links && p.links.length) {
      p.links.forEach(function (link) {
        var a = el("a", {
          class: "text-link",
          href: link.href,
          target: "_blank",
          rel: "noopener",
          text: link.label + " ",
        });
        if (link.note) a.appendChild(el("span", { class: "link-note", text: "(" + link.note + ")" }));
        linksWrap.appendChild(a);
      });
    } else {
      linksWrap.appendChild(el("span", { class: "coming-soon", text: "Write-up coming soon" }));
    }
    body.appendChild(linksWrap);

    return el("article", { class: "project-card", "data-reveal": "" }, [mediaFor(p), body]);
  }

  function renderProjects() {
    var mount = document.getElementById("project-list");
    if (!mount || typeof PROJECTS === "undefined") return;
    PROJECTS.forEach(function (p) { mount.appendChild(projectCard(p)); });
  }

  /* ---------- skills ---------- */

  function renderSkills() {
    var mount = document.getElementById("skills-grid");
    if (!mount || typeof SKILL_GROUPS === "undefined") return;
    SKILL_GROUPS.forEach(function (group) {
      mount.appendChild(
        el("section", { class: "skill-group", "data-reveal": "" }, [
          el("h3", { text: group.title }),
          el("ul", { class: "chip-list" },
            group.items.map(function (item) { return el("li", { class: "chip", text: item }); })),
        ])
      );
    });
  }

  syncSiteLinks();
  renderProjects();
  renderSkills();
})();
