
import BookingForm from '@/components/BookingForm';

const BookNow = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Now - Right Car Detailing</h1>
          <p className="text-xl text-gray-600">
            Schedule your mobile car detailing service today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Book Your Detailing Service</h2>
              <BookingForm />
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">✓</span>
                  <div>
                    <span className="font-semibold block mb-1">Interior Detailing</span>
                    <span className="text-sm text-gray-600">Complete interior cleaning and protection</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">✓</span>
                  <div>
                    <span className="font-semibold block mb-1">Exterior Detailing</span>
                    <span className="text-sm text-gray-600">Washing, polishing, and protection for your vehicle's exterior</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">✓</span>
                  <div>
                    <span className="font-semibold block mb-1">Complete Auto Detailing</span>
                    <span className="text-sm text-gray-600">Comprehensive interior and exterior detailing package</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">1.</span>
                  <span>Fill out and submit the booking request form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">2.</span>
                  <span>Receive confirmation within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">3.</span>
                  <span>Our team arrives at your location on the scheduled date and time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2">4.</span>
                  <span>Enjoy your freshly detailed vehicle!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
