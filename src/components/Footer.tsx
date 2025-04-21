import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-gradient text-white mt-10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Bridge Auto Detailing</h3>
            <p className="mb-4">
              Serving Lethbridge City, Canada with premium mobile car detailing. Experience automotive care like never before!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/interior-detailing" className="hover:text-secondary transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link to="/exterior-detailing" className="hover:text-secondary transition-colors">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link to="/complete-detailing" className="hover:text-secondary transition-colors">
                  Complete Auto Detailing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="hover:text-secondary transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-secondary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} Bridge Auto Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
