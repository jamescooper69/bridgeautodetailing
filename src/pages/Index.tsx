
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ServiceArea from '@/components/ServiceArea';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div>
      <Hero />

      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-heading text-center text-primary">Our Premium Detailing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Interior Car Detailing"
              description="Experience top-quality car detailing at your home or workplace in Lethbridge City! Our expert team ensures your vehicle looks spotless."
              linkUrl="/interior-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1575750679513-d7bfa919e0d7?w=800&q=80"
            />
            <ServiceCard 
              title="Exterior Car Detailing"
              description="Your car's exterior is exposed to road grime and the elements. Our professional service restores, protects, and enhances your shine—serving Lethbridge City only."
              linkUrl="/exterior-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80"
            />
            <ServiceCard 
              title="Complete Auto Detailing"
              description="Enjoy our full luxury auto detailing at your doorstep in Lethbridge City—inside and out."
              linkUrl="/complete-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1616628184584-f9214be51aab?w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center text-primary">Our Service Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
            <ServiceArea 
              region="Lethbridge City, Canada"
              description="Restore, protect, and detail your vehicle with our expert team—serving only clients in Lethbridge City."
            />
          </div>
        </div>
      </section>
      <CTASection />

      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-heading text-center text-primary">Why Choose Bridge Auto Detailing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-premium p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-secondary">Mobile Service</h3>
              <p>
                We come to your home or office anywhere in Lethbridge City, providing seamless convenience.
              </p>
            </div>
            
            <div className="card-premium p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-secondary">Professional Results</h3>
              <p>
                Our technicians use only the most advanced products for an unmatched finish and protection.
              </p>
            </div>
            
            <div className="card-premium p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-secondary">Luxury Experience</h3>
              <p>
                Enjoy a premium auto detailing experience designed to impress and satisfy every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
