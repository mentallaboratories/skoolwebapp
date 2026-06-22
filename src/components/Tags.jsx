// Tags.jsx
// A labelled group of Tag chips with an optional leading icon button.
// Props:
//   iconId   — sprite icon for the header button
//   items    — [{ href, label, active, highlight }]
// Usage:
//   <Tags iconId="icon-home" items={homeTagItems} />

import Button from './Button';
import Tag from './Tag';

export default function Tags({ iconId, items = [] }) {
  return (
    <div className="container" style={{ backgroundColor: '#0d1117', backgroundImage: 'url(./images/layout/background-tag.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' , backgroundSize: '40px 40px', padding: '1rem 0' }}>
      {/* {iconId && (
        <Button variant="routine" className="create__mode" iconId={iconId} iconOnly />
      )} */}
      <div className="lesson-tags">
        <p className="hero-eyebrow" style={{width: '100%', textAlign: 'right' }}>Теги уроку</p>
      </div>

      <div className="lesson-tags">
        {items.map(({ href, label, active, highlight }) => (
          <Tag key={href} href={href} active={highlight ?? active}>
            {label}
          </Tag>
        ))}
      </div>
    </div>
  );
}
