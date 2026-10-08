# Portfolio — Xin Yue Zhang

A static site. No build step, no dependencies: plain HTML and one stylesheet.

```
index.html      home — wordmark + three project blocks
work.html       the projects, longer
about.html      bio, experience, tools
contact.html    email and links
styles.css      all styling (colours are CSS variables at the top)
assets/         logo mark + placeholder images
```

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
- **The third project** on `index.html` and `work.html` is an empty template.
- **Links** on `contact.html` point at bare linkedin.com / github.com — add your handles.
- **Colours** are the variables at the top of `styles.css`. `--glow` drives the radial
  background; raising it toward a hue (e.g. `#2a1030`) brings colour back in.
