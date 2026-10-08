# Portfolio — Xin Yue Zhang

A static one-page site. No build step, no dependencies: one HTML file, one
stylesheet, one small script.

```
index.html      the whole site — hero, #work, #about, #contact
styles.css      all styling (colours are CSS variables at the top)
nav.js          highlights the nav link for the section you're looking at
assets/         logo mark + placeholder images
```

The nav links are plain anchors (`#work`, `#about`, `#contact`), so they jump
to the matching section and keep working with JavaScript disabled — `nav.js`
only adds the highlight.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Publish on GitHub Pages

1. Create a new repository on GitHub. Name it `<your-username>.github.io` if you want
   the site at `https://<your-username>.github.io`, or any other name for
   `https://<your-username>.github.io/<repo-name>/`.
2. Push this folder:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
   The site goes live in a minute or two.

## Things to change

- **Images.** `assets/placeholder-*.svg` are stand-ins. Drop in real images (jpg, png or
  webp), update the `src` and the `alt` text on each `<img>`, and keep the `width`/`height`
  attributes roughly matching the real dimensions so the page doesn't jump while loading.
- **The third project** in the `#work` section is an empty template.
- **Links** in `#contact` point at bare linkedin.com / github.com — add your handles.
- **Colours** are the variables at the top of `styles.css`. `--glow` drives the radial
  background; raising it toward a hue (e.g. `#2a1030`) brings colour back in.
- **Nav bar height** is `--bar`. If you change it, anchor offsets follow automatically —
  `scroll-padding-top` is derived from it.

## Adding a section

Three steps, all in `index.html`:

1. `<section id="newthing" aria-labelledby="newthing-heading">` with an
   `<h2 id="newthing-heading" class="section-title">` inside.
2. Add `<a href="#newthing">New thing</a>` to the `.nav`.
3. Nothing else — `nav.js` picks up any nav link whose `href` starts with `#`.
