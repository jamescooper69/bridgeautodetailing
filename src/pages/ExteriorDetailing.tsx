
import CTASection from '@/components/CTASection';

const ExteriorDetailing = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Exterior Car Detailing</h1>
          <p className="text-xl text-gray-600">
            Professional exterior detailing that restores your car's shine
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1600045330155-7421a6a8c2da?w=800&q=80" 
                alt="Exterior Car Detailing" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Your car's exterior is constantly exposed</h2>
              <p className="text-lg text-gray-700 mb-6">
                Dirt, dust, road grime, and harsh weather conditions can affect your car's appearance. Our professional exterior detailing service is designed to restore and protect your car's shine.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From washing and clay bar treatment to polishing and waxing, we provide comprehensive exterior detailing that will make your car stand out.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Exterior Detailing Process:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Hand wash with pH-balanced soap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Clay bar treatment to remove contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Paint correction and polishing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>High-quality wax application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Tire and wheel cleaning and dressing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Exterior glass cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Trim restoration and protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Exterior Car Detailing - Restore Your Car's Shine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Paint Protection</h3>
              <p className="text-gray-700">
                Our premium waxes and sealants provide long-lasting protection against environmental contaminants and UV damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Scratch Removal</h3>
              <p className="text-gray-700">
                Our paint correction services help eliminate minor scratches, swirl marks, and imperfections in your vehicle's clear coat.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Showroom Shine</h3>
              <p className="text-gray-700">
                Experience a mirror-like finish that makes your car look like it just rolled off the showroom floor.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default ExteriorDetailing;
