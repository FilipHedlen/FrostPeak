import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white font-bold p-4 fixed bottom-0 w-full flex justify-around">
      <div>Made by Filip Hedlén | © FrostPeak Explorer 2024</div>
      <div>
        <Link to="/contact" className="text-white">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;