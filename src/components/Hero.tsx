
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container-custom py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium Mobile Car Detailing
          </h1>
          <p className="text-xl mb-8">
            Book today and enjoy a hassle-free, top-quality car detailing experience!
          </p>
          <p className="text-lg mb-12">
            Premium Mobile Car Detailing in Alberta & British Columbia - We Come to You!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-now" className="btn-secondary">
              Book Now
            </Link>
            <Link to="/contact" className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
