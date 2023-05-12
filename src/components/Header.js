import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <img src={logo} className="AppLogo" alt="logo" />
        <ul className="NavItems">
          <li>Pricing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
