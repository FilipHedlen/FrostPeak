import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  return (
    <header className="bg-blue text-white font-bold sticky p-4 top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
            <img src="/logo.png" alt="Logo" className="" />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;