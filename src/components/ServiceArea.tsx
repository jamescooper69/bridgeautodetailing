
interface ServiceAreaProps {
  region: string;
  description: string;
}

const ServiceArea = ({ region, description }: ServiceAreaProps) => {
  return (
    <div className="card-premium p-8">
      <h3 className="text-2xl font-bold mb-4 text-secondary">
        Car Detailing in {region}
      </h3>
      <p className="mb-6">{description}</p>
      <div className="flex items-center text-gold">
        <span className="text-secondary font-semibold mr-2">✓</span>
        <span>Premium Car Detailing in {region}</span>
      </div>
    </div>
  );
};

export default ServiceArea;
