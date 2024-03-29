import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavMenu = () => {
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
          <div className="w-6 h-6">
            <span className={`block bg-white h-1 w-full mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block bg-white h-1 w-full mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block bg-white h-1 w-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-[80%] max-w-md rounded-lg shadow-md opacity-100 animate-fade-in-left p-8">
            <ul className="flex flex-col items-center space-y-6 font-poppins text-2xl text-black">
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
                  to="/about" 
                  onClick={() => closeMenu()}
                  className="hover:text-blue transition duration-100"
                >
                  About us
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

export default MobileNavMenu;