
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="premium-gradient py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
          Ready for a Showroom Shine?
        </h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Only in Lethbridge City — mobile luxury detailing at your convenience. Gold-standard service from booking to finish.
        </p>
        <Link to="/book-now" className="btn-gold text-lg">
          Book Your Detailing Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
