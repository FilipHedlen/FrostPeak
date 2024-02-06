import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-darkblue text-white font-poppins font-bold p-6 fixed bottom-0 w-full flex justify-between">
      <p>© FrostPeak Explorer 2024</p>
      <Link to="/contact" className="text-white">
        Contact Us
      </Link>
    </footer>
  );
};

export default Footer;