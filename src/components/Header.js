import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <img src={logo} className="AppLogo" alt="logo" />
        <span>ReactFacts</span>
      </div>
      <h3 className="ExtraTitle">React Course - Project 1</h3>
    </header>
  );
}

export default Header;
