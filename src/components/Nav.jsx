// Nav.jsx
// Desktop navigation list inside the header.
// Props:
//   items      — [{ href, iconId, label }]
//   currentHref — marks the active item

import Icon from './Icon';

export default function Nav({ items = [], currentHref }) {
  return (
    <nav className="header__nav">
      <ul className="nav">
        {items.map(({ href, iconId, label }) => (
          <li key={href}>
            <a
              className={`nav__item${href === currentHref ? ' current' : ''}`}
              href={href}
            >
              <div className="nav__icon">
                <Icon id={iconId} />
              </div>
              <span className="nav__link--gdisk">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
