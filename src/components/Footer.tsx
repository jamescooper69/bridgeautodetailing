
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Right Car Detailing</h3>
            <p className="mb-4">
              Premium mobile car detailing services in Alberta and British Columbia. We bring our expertise to your doorstep!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/interior-detailing" className="hover:text-primary transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link to="/exterior-detailing" className="hover:text-primary transition-colors">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link to="/complete-detailing" className="hover:text-primary transition-colors">
                  Complete Auto Detailing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/british-columbia" className="hover:text-primary transition-colors">
                  British Columbia
                </Link>
              </li>
              <li>
                <Link to="/alberta" className="hover:text-primary transition-colors">
                  Alberta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="hover:text-primary transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} Right Car Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
