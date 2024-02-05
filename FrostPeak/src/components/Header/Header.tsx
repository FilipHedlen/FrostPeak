import { Link } from 'react-router-dom';
import MobileNavMenu from '../Menu/Mobile/MobileNavMenu';
import DesktopNavMenu from '../Menu/Desktop/DesktopNavMenu';

const Header = () => {
  return (
    <header className="bg-darkblue text-white font-bold sticky p-4 top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
            <img src="/logo.png" alt="Logo" className="" />
        </Link>
        <MobileNavMenu />
        <DesktopNavMenu />
      </div>
    </header>
  );
};

export default Header;