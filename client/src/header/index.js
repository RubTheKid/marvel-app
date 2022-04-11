import React from 'react';
import marvel from './marvel.png';
import './style.css';

const Header = () => (
  <header className="Header">
    
    <div className="MarvelBrand">
       <img src={marvel} className="logo" alt="Marvel logo" id="logo" />
        <div>
            <small>Data provided by Marvel. © 2022 MARVEL</small>
        </div>
    </div>

  </header>
);

export default Header;
