
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Bridge Auto Detailing</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              About
            </Link>
            <Link to="/interior-detailing" className="text-gray-700 hover:text-primary font-medium">
              Interior Detailing
            </Link>
            <Link to="/exterior-detailing" className="text-gray-700 hover:text-primary font-medium">
              Exterior Detailing
            </Link>
            <Link to="/complete-detailing" className="text-gray-700 hover:text-primary font-medium">
              Complete Auto Detailing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <Link to="/book-now" className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/interior-detailing"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Interior Detailing
              </Link>
              <Link
                to="/exterior-detailing"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Exterior Detailing
              </Link>
              <Link
                to="/complete-detailing"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Complete Auto Detailing
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/book-now"
                className="btn-primary inline-block text-center"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
