
interface ServiceAreaProps {
  region: string;
  description: string;
}

const ServiceArea = ({ region, description }: ServiceAreaProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Car Detailing in {region}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center">
        <span className="text-secondary font-semibold mr-2">✓</span>
        <span>Premium Car Detailing Services Across {region}</span>
      </div>
    </div>
  );
};

export default ServiceArea;
