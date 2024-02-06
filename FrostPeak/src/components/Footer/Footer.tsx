import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-darkblue text-white font-poppins font-bold p-6 fixed bottom-0 w-full flex justify-between">
      <p>© FrostPeak Explorer 2024</p>
      <div>
      <Link to="/about" className="text-white mr-6 hover:bg-cherryred">
        About
      </Link>
      <Link to="/contact" className="text-white hover:bg-cherryred">
        Contact
      </Link>
      </div>
    </footer>
  );
};

export default Footer;