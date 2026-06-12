// Popup.jsx
// Mobile navigation modal.
// Props:
//   isOpen      — boolean
//   onClose     — () => void
//   navItems    — same shape as Nav's navItems
//   currentHref — marks the active item

import { useEffect } from 'react';
import Icon from './Icon';

export default function Popup({ isOpen, onClose, navItems = [], currentHref }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`mob-modal${isOpen ? '' : ' is-hidden'}`}
      id="mobModal"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button type="button" className="close__button" onClick={onClose}>
        <Icon id="icon-cross" size={24} />
      </button>

      <ul className="mob-menu__nav">
        {navItems.map(({ href, iconId, label }) => (
          <li
            key={href}
            className={`mob-nav__item${href === currentHref ? ' current' : ''}`}
          >
            <div className="nav__icon">
              <Icon id={iconId} />
            </div>
            <a className="mob-menu__link" href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
