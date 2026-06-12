// App.jsx
// Root component — wires Header, Hero, Footer together.
// navItems is the single source of truth for all navigation.

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const NAV_ITEMS = [
  { href: './index.html',     iconId: 'icon-home',      label: './index.html' },
  { href: './it.html',        iconId: 'icon-it',        label: './it.html' },
  { href: './timetable.html', iconId: 'icon-timetable', label: './timetable.html' },
  { href: './guide.html',     iconId: 'icon-flower',    label: './guide.html' },
  { href: './storage.html',   iconId: 'icon-docs',      label: './storage.html' },
];

const CURRENT_HREF = './index.html';

export default function App() {
  return (
    <>
      <Header navItems={NAV_ITEMS} currentHref={CURRENT_HREF} />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
