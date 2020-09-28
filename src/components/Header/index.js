import React from 'react';
import {NavLink, } from 'react-router-dom';

import './header.scss';

export default function Header() {
  return (
    <header className="header">
        <div className="header__img-container">
          <img
            alt="logo"
            src="./assets/img/logo.svg"
            className="header__logo"
          />
        </div>

          <nav className="Nav">
            <ul className="Nav__list">
              <li className="Nav__item"><NavLink to="/">HOME</NavLink></li>
              <li className="Nav__item"><NavLink to="/about">ABOUT US</NavLink></li>
            </ul>
          </nav>
    </header>
  )
}
