
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready for a Showroom Shine?
        </h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Give your car the premium detailing treatment it deserves. We come to your home or workplace.
        </p>
        <Link to="/book-now" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
          Book Your Detailing Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
