import React from 'react';
import "./App.css"

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/logo">MyApp</a>
        </div>

        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <button className="theme-toggle-btn">
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
