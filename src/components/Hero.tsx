import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="premium-gradient text-foreground">
      <div className="container-custom py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary drop-shadow-lg">
            Premium Mobile Car Detailing in Lethbridge City
          </h1>
          <p className="text-xl mb-8">
            Book today for a luxury car detailing experience—exclusively serving Lethbridge City!
          </p>
          <p className="text-lg mb-12 text-secondary">
            We come to your doorstep in Lethbridge City, with the gold standard in car care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book Now
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
