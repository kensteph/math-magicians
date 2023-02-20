import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.module.css';

const Navbar = () => (
  <header>
    <nav>
      <h1 className="logo"> Math Magicians </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="vertical-line" />
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="vertical-line" />
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
