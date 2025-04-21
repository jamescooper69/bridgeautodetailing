
import CTASection from '@/components/CTASection';

const InteriorDetailing = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interior Car Detailing</h1>
          <p className="text-xl text-gray-600">
            Premium interior car detailing service that comes to you
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Tired of waiting at detailing shops?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We bring top-quality car detailing right to your home or workplace! Our expert team ensures your vehicle's interior looks spotless and feels fresh.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From vacuuming and steam cleaning to leather conditioning and odor removal, we provide comprehensive interior detailing that will transform your car's cabin.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Interior Detailing Process:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Thorough vacuuming of all surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Steam cleaning of seats, carpets, and floor mats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Cleaning and conditioning of leather surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Detailed cleaning of dashboard, console, and door panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Air vent cleaning and sanitization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Window and mirror cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Application of protective treatments</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1575750679513-d7bfa919e0d7?w=800&q=80" 
                alt="Interior Car Detailing" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Keep Your Car's Interior Looking Its Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Deep Cleaning</h3>
              <p className="text-gray-700">
                Our deep cleaning process removes stubborn stains, eliminates odors, and restores your car's interior to like-new condition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Protection</h3>
              <p className="text-gray-700">
                We apply premium protective products to shield surfaces from UV damage, spills, and everyday wear and tear.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sanitization</h3>
              <p className="text-gray-700">
                Our sanitization process eliminates germs and bacteria, creating a healthier environment for you and your passengers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default InteriorDetailing;
