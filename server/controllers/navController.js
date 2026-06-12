// server/controllers/navController.js
// Same data as App.jsx NAV_ITEMS — now served from the API.
// React can fetch this on mount so all pages share one source of truth.

const NAV_ITEMS = [
  { href: './index.html',     iconId: 'icon-home',      label: './index.html' },
  { href: './it.html',        iconId: 'icon-it',        label: './it.html' },
  { href: './timetable.html', iconId: 'icon-timetable', label: './timetable.html' },
  { href: './guide.html',     iconId: 'icon-flower',    label: './guide.html' },
  { href: './storage.html',   iconId: 'icon-docs',      label: './storage.html' },
];

export function getNav(_req, res) {
  res.json(NAV_ITEMS);
}
