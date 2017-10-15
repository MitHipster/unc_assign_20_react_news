import React from 'react';
import './Nav.css';

const Nav = () => (
  <header>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">News Monger</a>
          <a href="#" data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#search">Search</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#saved">Saved</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="side-nav" id="mobile-menu">
      <h5 className="side-navbar-title">Menu</h5>
      <hr />
      <li><a href="#search"><i className="material-icons">search</i>Search</a></li>
      <li><a href="#results"><i className="material-icons">library_books</i>Results</a></li>
      <li><a href="#saved"><i className="material-icons">save</i>Saved</a></li>
    </ul>
  </header>
);

export default Nav;
