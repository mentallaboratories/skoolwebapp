// Header.jsx
// Site header: logo + desktop nav + hamburger + mobile popup.
// Props:
//   navItems    — shared nav items array
//   currentHref — active page href

import { useState } from 'react';
import Nav from './Nav';
import Popup from './Popup';
import Icon from './Icon';

export default function Header({ navItems = [], currentHref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">

          {/* Logo */}
          <a className="logo home" href="./index.html">
            <span className="accent">Skool</span>Timez
          </a>

          {/* Desktop nav */}
          <Nav items={navItems} currentHref={currentHref} />

          {/* Hamburger */}
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Відкрити меню"
          >
            <Icon id="icon-steps" className="rotate180" />
          </button>

        </div>
      </div>

      {/* Mobile modal */}
      <Popup
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
        currentHref={currentHref}
      />
    </header>
  );
}
