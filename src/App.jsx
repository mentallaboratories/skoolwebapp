// App.jsx
// Root component — wires Header, Hero, Footer together.
// navItems is the single source of truth for all navigation.

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  const [siteData, setSiteData] = useState({ pages: [] });




  useEffect(() => {
    fetch('st.json')
      .then(r => r.json())
      .then(data => setSiteData(data))
      .catch(err => console.error('Failed to load st.json:', err));
  }, []);

  const NAV_ITEMS = (siteData.pages || []).map(p => ({
    href: p.route ?? p.file_name,
    iconId: p.layout?.header?.navigation_items?.find(i => i.is_current)?.icon || 'icon-home',
    label: p.file_name || p.route,
  }));

  // determine current href from browser location so Hero/Header reflect active page
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const basename = pathname === '/' || pathname === '' ? 'index.html' : pathname.split('/').pop();
  const CURRENT_HREF = `./${basename}`;

  // normalize helper: remove leading './' or '/'
  const normalize = (s) => (s || '').toString().replace(/^\.\//, '').replace(/^\//, '');
  const homepage = (siteData.pages || []).find(p => normalize(p.route ?? p.file_name) === normalize(basename)) || (siteData.pages || [])[0] || null;

  return (
    <>
      <Header navItems={NAV_ITEMS} currentHref={CURRENT_HREF} />
      <main>
        <Hero
          heroData={homepage?.layout?.main_content?.hero}
          lessonTags={homepage?.layout?.main_content?.lesson_tags}
          siteBigImage={siteData['big-image']}
        />
      </main>
      <Footer />
    </>
  );
}
