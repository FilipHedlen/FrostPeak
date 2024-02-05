import { Link } from 'react-router-dom';

const DesktopNavMenu = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-4">
      <ul className="flex flex-row justify-end font-poppins text-xl text-white">
        <li className="mr-5">
          <Link to="/" >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link to="/locations" >
            Locations
          </Link>
        </li>
        <li className="mr-5">
          <Link to="/slopes" >
            Slopes
          </Link>
        </li>
        <li className="mr-5">
          <Link to="/about" >
            About us
          </Link>
        </li>
        <li className="mr-5">
          <Link to="/contact" >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavMenu;