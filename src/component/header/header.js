// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a className='nav-bar' href="#hero">Accueil</a>
          </li>
          <li>
            <a className='nav-bar' href="#about">À propos de Moi</a>
          </li>
          <li>
            <a className='nav-bar' href="#projects">Mes Projets</a>
          </li>
          <li>
            <a  className='nav-bar' href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
