import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="lg:flex lg:items-center lg:w-auto lg:space-x-4">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer focus:outline-none lg:hidden z-50"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-[80%] max-w-md rounded-lg shadow-md opacity-100 animate-fade-in-left p-8">
            <ul className="flex flex-col justify-between space-y-6 font-poppins text-2xl text-black">
              <li>
                <Link 
                  to="/" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/locations" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/slopes" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  Slopes
                </Link>
              </li>
              <li>
                <Link 
                  to="/info" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  Information
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;