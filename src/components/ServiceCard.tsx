
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  imageUrl?: string;
}

const ServiceCard = ({
  title,
  description,
  linkUrl,
  linkText,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col h-full">
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <div className="mt-auto">
        <Link
          to={linkUrl}
          className="inline-block text-primary font-semibold hover:underline"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
