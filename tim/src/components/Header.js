import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="Header">
        <h1>
          <Link to="/">Onbiz Office</Link>
        </h1>
        <nav className="menu pc">
          <ul>
            <li><Link to="/">소개</Link></li>
            <li><Link to="/about">위치안내</Link></li>
            <li><Link to="/Services">예약안내</Link></li>
            <li><Link to="/Contact">온비즈 서비스</Link></li>
          </ul>
        </nav>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="menu mobile">
          <ul>
            <li><a href="#home">소개</a></li>
            <li><a href="#about">위치안내</a></li>
            <li><a href="#services">예약안내</a></li>
            <li><a href="#contact">온비즈 서비스</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
