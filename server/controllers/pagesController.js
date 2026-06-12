// server/controllers/pagesController.js

const PAGES = [
  { id: 'index',     href: './index.html',     title: 'Home',      icon: 'icon-home' },
  { id: 'it',        href: './it.html',         title: 'IT',        icon: 'icon-it' },
  { id: 'timetable', href: './timetable.html',  title: 'Timetable', icon: 'icon-timetable' },
  { id: 'guide',     href: './guide.html',      title: 'Guide',     icon: 'icon-flower' },
  { id: 'storage',   href: './storage.html',    title: 'Storage',   icon: 'icon-docs' },
];

export function getPages(_req, res) {
  res.json(PAGES);
}
