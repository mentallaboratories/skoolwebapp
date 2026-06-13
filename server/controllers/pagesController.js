// server/controllers/pagesController.js
import fs from 'fs';

// Load st.json from project root and expose a simplified pages list
let siteData = { pages: [] };
try {
  const dataPath = new URL('../../st.json', import.meta.url);
  const raw = fs.readFileSync(dataPath, 'utf8');
  siteData = JSON.parse(raw);
} catch (err) {
  console.error('Could not load st.json:', err.message);
}

export function getPages(_req, res) {
  const pages = (siteData.pages || []).map(p => ({
    id: p.id,
    href: p.route ?? p.file_name,
    title: p.meta?.title ?? p.file_name,
  }));
  res.json(pages);
}
