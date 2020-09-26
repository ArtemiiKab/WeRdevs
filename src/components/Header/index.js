import React from 'react';
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
              <li className="Nav__item"><a href="/">HOME</a></li>
              <li className="Nav__item"><a href="./about">ABOUT US</a></li>
            </ul>
          </nav>
    </header>
  )
}