// Tag.jsx
// A single clickable tag / chip.
// Usage: <Tag href="./it.html" active>#IT</Tag>

import Link from './Link';

export default function Tag({ href, active = false, children }) {
  return (
    <Link
      href={href}
      style={active ? { textDecoration: 'none', backgroundColor: 'gold' } : { textDecoration: 'none' }}
    >
      <span className="tag">{children}</span>
    </Link>
  );
}
