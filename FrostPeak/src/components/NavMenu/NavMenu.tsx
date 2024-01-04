import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (path: string) => {
    closeMenu();
    navigate(path);
  };

  return (
    <nav className="lg:flex lg:items-center lg:w-auto lg:space-x-4" style={{ zIndex: 999 }}>
      <div className="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer focus:outline-none lg:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
        <ul className="lg:flex lg:space-x-4">
          <li>
            <Link to="/" onClick={() => handleLinkClick('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/locations" onClick={() => handleLinkClick('/locations')}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/slopes" onClick={() => handleLinkClick('/slopes')}>
              Slopes
            </Link>
          </li>
          <li>
            <Link to="/info" onClick={() => handleLinkClick('/info')}>
              Information
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleLinkClick('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
