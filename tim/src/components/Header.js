import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <li>
              <Link to="/">소개</Link>
            </li>
            <li>
              <Link to="/about" className="menuColor">
                위치안내
              </Link>
            </li>
            <li>
              <Link to="/">예약안내</Link>
            </li>
            <li>
              <Link to="/Contact" className="menuColor">
                온비즈 서비스
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="menu mobile">
          <ul>
            <li>
              <Link to="/">소개</Link>
            </li>
            <li>
              <Link to="/about" className="menuColor">
                위치안내
              </Link>
            </li>
            <li>
              <Link to="/">예약안내</Link>
            </li>
            <li>
              <Link to="/Contact" className="menuColor">
                온비즈 서비스
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
