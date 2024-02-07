import { Link } from 'react-router-dom';

const DesktopNavMenu = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-4">
      <ul className="flex flex-row justify-end font-poppins text-xl text-white">
        <li className="mr-5">
          <Link 
            to="/"
            className="hover:text-blue transition duration-100" 
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/locations"
            className="hover:text-blue transition duration-100" 
          >
            Locations
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/slopes"
            className="hover:text-blue transition duration-100"
          >
            Slopes
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/about"
            className="hover:text-blue transition duration-100" 
          >
            About us
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/contact"
            className="hover:text-blue transition duration-100" 
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavMenu;