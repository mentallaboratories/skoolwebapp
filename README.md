# SkoolTimez — React Refactor

## Project structure

```
skoolTimez/
├── index.html              ← Vite HTML entry (replaces old index.html shell)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            ← React root mount
    ├── App.jsx             ← Page composition + shared NAV_ITEMS data
    ├── index.css           ← rename your main.css to index.css (or update main.jsx path)
    └── components/
        ├── Icon.jsx        ← <Icon id="icon-home" size={48} />
        ├── Link.jsx        ← <Link href="..." external> ... </Link>
        ├── Button.jsx      ← polymorphic: btn / routine / set / time / symbol
        ├── Tag.jsx         ← single tag chip
        ├── Tags.jsx        ← labelled tag group with leading icon
        ├── Nav.jsx         ← desktop navigation list
        ├── Popup.jsx       ← mobile modal menu (Escape + outside-click close)
        ├── Header.jsx      ← logo + Nav + hamburger + Popup
        ├── Article.jsx     ← hero explainer block
        ├── Card.jsx        ← footer block card with title
        ├── List.jsx        ← icon-button list used inside Cards
        ├── Hero.jsx        ← full hero section (composed from Tags/Article/Button)
        └── Footer.jsx      ← footer grid of Cards + bottom bar
```

## Component responsibilities

| Component | Responsibility |
|-----------|---------------|
| `Icon`    | Renders one `<svg><use>` sprite reference |
| `Link`    | Anchor with internal/external handling |
| `Button`  | Polymorphic button (renders `<a>` when `href` given); variant controls class set |
| `Tag`     | Single clickable `#hashtag` chip |
| `Tags`    | Group of Tags with optional leading icon button |
| `Nav`     | Desktop `<ul>` navigation |
| `Popup`   | Mobile modal overlay (keyboard & outside-click aware) |
| `Header`  | Full header: logo + Nav + hamburger → Popup |
| `Article` | `hero-explainer` block with optional h3 title |
| `Card`    | `footer-block` wrapper with title |
| `List`    | `<ul>` of icon buttons, used inside Cards |
| `Hero`    | Full hero section, assembles Tags / Article / Button / img |
| `Footer`  | Footer grid of Cards + copyright bar |

## Setup

```bash
npm install
npm run dev
```

Copy `icon.svg` and `main.css` (→ `src/index.css`) from your original project.
Images at `../images/layout/study.png` resolve relative to `public/` in Vite —
move them to `public/images/layout/study.png` and update the `src` in `Hero.jsx`.

## Changing the active page

In `App.jsx`, update `CURRENT_HREF`:

```js
const CURRENT_HREF = './it.html';  // marks IT as active in header + popup
```
