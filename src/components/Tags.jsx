// Tags.jsx
// A labelled group of Tag chips with an optional leading icon button.
// Props:
//   iconId   — sprite icon for the header button
//   items    — [{ href, label, active }]
// Usage:
//   <Tags iconId="icon-home" items={homeTagItems} />

import Button from './Button';
import Tag from './Tag';

export default function Tags({ iconId, items = [] }) {
  return (
    <div className="container" style={{ backgroundColor: '#0d1117', padding: '2rem' }}>
      {iconId && (
        <Button variant="routine" className="create__mode" iconId={iconId} iconOnly />
      )}
      <div className="lesson-tags">
        {items.map(({ href, label, active }) => (
          <Tag key={href} href={href} active={active}>
            {label}
          </Tag>
        ))}
      </div>
    </div>
  );
}
