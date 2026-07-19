# Keona Arneson — Portfolio

Personal portfolio site: projects, skills, and resume for recruiters, grad programs,
and networking. Deliberately **zero-build**: plain HTML + CSS + a small amount of
vanilla JavaScript. No frameworks, no npm, no build step — nothing to install,
nothing that can rot. It will deploy unchanged for years.

## Structure

```
index.html          All layout and static sections (hero, about, resume, contact)
styles.css          All styling. Design tokens (colors, fonts) at the top.
js/data.js          ← EDIT THIS to change content (projects, skills, links)
js/render.js        Builds project cards & skill groups from data.js
js/main.js          Theme toggle, mobile nav, scroll animations, copy-email
assets/             favicon.svg, og.png (social preview), images/ for project photos
docs/               Project write-up PDFs
resume/             Resume PDF
netlify.toml        Netlify publish settings + caching/security headers
```

## Preview locally

Just open `index.html` in a browser — everything works from a double-click.

For a "real" localhost preview (closer to how Netlify serves it):

```powershell
python -m http.server 8080
# then open http://localhost:8080
```

## Editing content

### Add or edit a project

Open `js/data.js`, copy an existing `{ ... }` block inside `PROJECTS`, and edit it.
Order in the array = order on the page. Every field is plain text (it's rendered
safely, so `&`, `<`, quotes etc. are fine).

```js
{
  title: "My New Project",
  status: "In progress",          // or "" when finished
  meta: "Course project · 2027",  // small label above the title
  summary: "One-line summary shown in bold.",
  description: "Two or three sentences of detail.",
  tools: ["LTspice", "MATLAB"],
  links: [
    { label: "Report", href: "docs/my-report.pdf", note: "PDF · 1.2 MB" },
    { label: "GitHub repo", href: "https://github.com/keonaarneson/my-repo", note: "" },
  ],
  image: null,   // see below
},
```

### Add a project image / schematic

1. Drop the file in `assets/images/` (aim for ~1200 px wide JPG/PNG/WebP).
2. In that project's block, replace `image: null` with:

```js
image: { src: "assets/images/my-photo.jpg", alt: "What the image shows, for screen readers" },
```

The dashed placeholder disappears automatically.

### Update skills

Edit `SKILL_GROUPS` in `js/data.js` — same idea: groups of plain-text items.

### Replace the resume

Overwrite `resume/Keona-Arneson-Resume.pdf` with the new file, **keeping the same
filename**. Every button and link keeps working, and the embedded viewer shows the
new version.

### Update your links / email

Edit `SITE` at the top of `js/data.js` — the page syncs all header/contact links
from it on load. (The same URLs are also hard-coded in `index.html` as a fallback
for the rare visitor with JavaScript off; search for `data-site-link` if you want
to keep those in step.)

## Deploy to Netlify

**Option A — drag & drop (fastest first deploy)**

1. Go to <https://app.netlify.com/drop>.
2. Drag this whole folder onto the page. Done — you'll get a `*.netlify.app` URL.

**Option B — Git-connected (recommended long-term: every push auto-deploys)**

1. Push this folder to a GitHub repository.
2. In Netlify: *Add new site → Import an existing project* → pick the repo.
3. Netlify reads `netlify.toml` automatically — leave **Build command** empty,
   publish directory is `.` — and deploys on every push.

**After the first deploy (one-time):** replace `keona-arneson.netlify.app` with
your real site URL in `index.html` (canonical link, `og:url`, `og:image`, and the
JSON-LD `url`). If you later add a custom domain, do the same again.

## Notes

- **Accessibility:** semantic landmarks, skip-link, visible focus states, AA color
  contrast, alt text required on project images, reduced-motion respected.
- **Fonts** load from Google Fonts (Space Grotesk / Inter / IBM Plex Mono). If you
  ever want zero third-party requests, download the .woff2 files and self-host —
  the `@font-face` swap is the only change needed.
- **Social preview image** is `assets/og.png` (1200×630). Regenerate or replace it
  any time; keep the same path.
