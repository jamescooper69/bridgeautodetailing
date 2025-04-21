
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const BritishColumbia = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Car Detailing in British Columbia</h1>
          <p className="text-xl text-gray-600">
            Premium mobile car detailing services across British Columbia
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1618588085075-c940748184cc?w=800&q=80" 
                alt="Car Detailing in British Columbia" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Restore, protect, and enhance your vehicle's look</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Right Car Detailing, we provide exceptional mobile car detailing services throughout British Columbia, bringing professional-grade detailing right to your doorstep.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team is equipped with the latest tools and premium products to deliver outstanding results, whether you need interior detailing, exterior detailing, or complete auto detailing.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Service Areas in British Columbia:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Vancouver</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Victoria</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Kelowna</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Kamloops</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Nanaimo</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Abbotsford</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Surrey</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Richmond</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Link to="/book-now" className="btn-primary">
                  Book Your Detailing Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Premium Car Detailing Services Across British Columbia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Interior Detailing</h3>
              <p className="text-gray-700 mb-4">
                Complete interior cleaning, steam cleaning, and protection for your vehicle's cabin.
              </p>
              <Link to="/interior-detailing" className="text-primary font-semibold hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Exterior Detailing</h3>
              <p className="text-gray-700 mb-4">
                Hand washing, clay bar treatment, polishing, and waxing to restore your car's shine.
              </p>
              <Link to="/exterior-detailing" className="text-primary font-semibold hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Complete Auto Detailing</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive detailing package that combines interior and exterior services for a total transformation.
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

export default BritishColumbia;
