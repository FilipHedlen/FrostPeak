import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white font-bold sticky p-4 top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <img src="/logo.png" alt="Logo" className="" />
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;