# SkoolTimez — Full-stack (Express + React)

## Project structure

```
skoolTimez/
├── .env.example
├── .gitignore
├── package.json            ← scripts for both client & server
├── vite.config.js          ← Vite + /api proxy to Express
├── index.html              ← Vite HTML entry
│
├── server/                 ← Node.js / Express
│   ├── index.js            ← app entry, listens on PORT (default 3001)
│   ├── routes/
│   │   ├── api.js          ← mounts /pages, /nav, /health
│   │   ├── pages.js        ← GET /api/pages
│   │   └── nav.js          ← GET /api/nav
│   ├── controllers/
│   │   ├── pagesController.js
│   │   └── navController.js
│   └── middleware/
│       └── errorHandler.js
│
└── src/                    ← React (Vite)
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Icon.jsx
        ├── Link.jsx
        ├── Button.jsx
        ├── Tag.jsx
        ├── Tags.jsx
        ├── Nav.jsx
        ├── Popup.jsx
        ├── Header.jsx
        ├── Article.jsx
        ├── Card.jsx
        ├── List.jsx
        ├── Hero.jsx
        └── Footer.jsx
```

## Setup

```bash
cp .env.example .env
npm install
```

## Development (both servers at once)

```bash
npm run dev
```

| Service | URL |
|---------|-----|
| React (Vite) | http://localhost:5173 |
| Express API  | http://localhost:3001 |

Vite proxies `/api/*` → Express automatically, so no CORS issues.

## API endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/api/health` | `{ status, timestamp }` |
| GET | `/api/nav`    | Array of nav items |
| GET | `/api/pages`  | Array of page metadata |

## Production build

```bash
npm run build   # Vite → dist/
npm start       # Express serves dist/ + API on PORT
```

## Adding a new API route

1. Create `server/controllers/thingController.js`
2. Create `server/routes/thing.js` — `router.get('/', getThing)`
3. Register in `server/routes/api.js` — `router.use('/thing', thingRouter)`

## Future: Google OAuth

When ready — add to `.env`:
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SESSION_SECRET=
```
Then add `passport` + `express-session` in `server/middleware/`.
