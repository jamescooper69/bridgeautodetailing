
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ServiceArea from '@/components/ServiceArea';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading text-center">Our Premium Detailing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Interior Car Detailing"
              description="Tired of waiting at detailing shops? We bring top-quality car detailing right to your home or workplace! Our expert team ensures your vehicle looks spotless."
              linkUrl="/interior-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80"
            />
            
            <ServiceCard 
              title="Exterior Car Detailing"
              description="Your car's exterior is constantly exposed to dirt, dust, road grime, and harsh weather. Our professional exterior detailing service is designed to restore and protect your car's shine."
              linkUrl="/exterior-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80"
            />
            
            <ServiceCard 
              title="Complete Auto Detailing"
              description="Tired of waiting at detailing shops? We bring top-quality complete auto detailing right to your home or workplace! Our expert team ensures your vehicle looks spotless inside and out."
              linkUrl="/complete-detailing"
              linkText="Learn More"
              imageUrl="https://images.unsplash.com/photo-1605515298946-d091848b008a?w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ServiceArea 
              region="British Columbia"
              description="Restore, protect, and enhance your vehicle's look with our expert detailing services across British Columbia. We come to you!"
            />
            
            <ServiceArea 
              region="Alberta"
              description="Restore, protect, and enhance your vehicle's look with our expert detailing services across Alberta. We come to you!"
            />
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading text-center">Why Choose Right Car Detailing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Mobile Service</h3>
              <p className="text-gray-600">
                We come to your home or office, saving you time and hassle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Professional Results</h3>
              <p className="text-gray-600">
                Our expert technicians use premium products for exceptional quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Convenient Booking</h3>
              <p className="text-gray-600">
                Simple online booking process with flexible scheduling options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
