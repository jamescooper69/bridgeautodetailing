
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const Alberta = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Car Detailing in Alberta</h1>
          <p className="text-xl text-gray-600">
            Premium mobile car detailing services across Alberta
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Restore, protect, and enhance your vehicle's look</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Right Car Detailing, we bring exceptional mobile car detailing services throughout Alberta, delivering professional-grade detailing directly to your location.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated team uses only premium products and advanced techniques to ensure your vehicle receives the highest quality care and attention it deserves.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Service Areas in Alberta:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Calgary</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Edmonton</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Red Deer</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Lethbridge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Fort McMurray</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Medicine Hat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Grande Prairie</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Airdrie</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Link to="/book-now" className="btn-primary">
                  Book Your Detailing Now
                </Link>
              </div>
            </div>
            <div className="bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1576425546594-25dd4d7a6388?w=800&q=80" 
                alt="Car Detailing in Alberta" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Premium Car Detailing Services Across Alberta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Interior Detailing</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive interior cleaning, steam cleaning, and protection services for your vehicle.
              </p>
              <Link to="/interior-detailing" className="text-primary font-semibold hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Exterior Detailing</h3>
              <p className="text-gray-700 mb-4">
                Professional washing, clay bar treatment, polishing, and waxing to restore your car's exterior.
              </p>
              <Link to="/exterior-detailing" className="text-primary font-semibold hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Complete Auto Detailing</h3>
              <p className="text-gray-700 mb-4">
                Full-service detailing package that combines interior and exterior services for a complete transformation.
              </p>
              <Link to="/complete-detailing" className="text-primary font-semibold hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default Alberta;
