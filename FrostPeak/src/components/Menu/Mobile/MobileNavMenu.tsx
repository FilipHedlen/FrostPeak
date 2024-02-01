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
          className="text-white cursor-pointer focus:outline-none lg:hidden"
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
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-24 rounded-lg shadow-md transition-all duration-2500 ease-in-out transform scale-100 opacity-100 z-50">
            <ul className="flex flex-col space-y-4 font-poppins text-2xl text-black">
              <li>
                <Link 
                to="/" 
                onClick={() => {
                    closeMenu();
                }}
                className="hover:border-b-2 border-black transition duration-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                to="/locations" 
                onClick={() => {
                    closeMenu();
                }}
                className="hover:border-b-2 border-black transition duration-100"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                to="/slopes" 
                onClick={() => {
                    closeMenu();
                }}
                className="hover:border-b-2 border-black transition duration-100"
                >
                  Slopes
                </Link>
              </li>
              <li>
                <Link 
                to="/info" 
                onClick={() => {
                    closeMenu();
                }}
                className="hover:border-b-2 border-black transition duration-100"
                >
                  Information
                </Link>
              </li>
              <li>
                <Link 
                to="/contact" 
                onClick={() => {
                    closeMenu();
                }}
                className="hover:border-b-2 border-black transition duration-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            onClick={closeMenu}
          >
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;