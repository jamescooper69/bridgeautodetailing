
import CTASection from '@/components/CTASection';

const CompleteDetailing = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Complete Auto Detailing</h1>
          <p className="text-xl text-gray-600">
            Comprehensive interior and exterior detailing for your vehicle
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Tired of waiting at detailing shops?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We bring top-quality complete auto detailing right to your home or workplace! Our expert team ensures your vehicle right looks spotless inside and out.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our complete auto detailing package combines our premium interior and exterior detailing services for a comprehensive transformation of your vehicle.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Complete Auto Detailing Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Full interior detailing with steam cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Full exterior hand wash and clay bar treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Paint correction and polishing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Premium wax application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Wheel and tire detailing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Interior and exterior glass cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <span>Engine bay cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80"
                alt="Complete Auto Detailing" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Give Your Car a Showroom Shine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Total Transformation</h3>
              <p className="text-gray-700">
                Our complete detailing service transforms your vehicle inside and out, restoring its beauty and protecting its surfaces.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Value Protection</h3>
              <p className="text-gray-700">
                Regular complete detailing helps maintain your vehicle's value by preserving its appearance and preventing long-term damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Convenience</h3>
              <p className="text-gray-700">
                We come to your location with all necessary equipment and supplies, saving you time and hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default CompleteDetailing;
