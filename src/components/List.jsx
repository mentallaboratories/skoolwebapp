// List.jsx
// Renders an icon-button list used in footer blocks.
// Props:
//   items     — [{ iconId, variant, className }]
//   listClass — CSS class for the <ul>
// Usage:
//   <List
//     listClass="skills__list"
//     items={[
//       { iconId: 'icon-docs',       variant: 'set' },
//       { iconId: 'icon-british-fl', variant: 'routine', className: 'create__mode' },
//     ]}
//   />

import Button from './Button';

export default function List({ items = [], listClass = 'mob-menu-list' }) {
  return (
    <ul className={listClass}>
      {items.map(({ iconId, variant = 'routine', className = '' }, i) => (
        <li key={i}>
          <Button variant={variant} className={className} iconId={iconId} iconOnly />
        </li>
      ))}
    </ul>
  );
}
