import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

interface FeaturedRoomsSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
}

const FeaturedRoomsSection = ({
  title,
  subtitle,
  backgroundColor = 'bg-white',
  textColor = 'text-ace-dark'
}: FeaturedRoomsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const properties = [
    {
      name: 'Royal Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      location: 'Connaught Place, Delhi',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Luxury Deluxe Room',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      location: 'Cyber City, Gurugram',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Premium Studio',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      location: 'Pink City, Jaipur',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Heritage Villa',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      location: 'Sector 18, Noida',
      bookingLink: 'tel:+919403890926'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${textColor}`}>
            {title}
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-poppins ${textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.name} property={property} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Property Card Component
const PropertyCard = ({
  property,
  index,
  isInView
}: {
  property: {
    name: string;
    image: string;
    location: string;
    bookingLink: string;
  };
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className="font-poppins text-xl font-bold text-ace-dark mb-3">{property.name}</h3>
      <div className="flex items-center text-gray-600 text-sm mb-6">
        <MapPin size={16} className="mr-2" />
        <span className="font-poppins">{property.location}</span>
      </div>

      <a href={property.bookingLink} className="block">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-ace-gold text-white py-3 rounded-lg font-medium hover:bg-ace-dark transition-colors duration-200 font-poppins"
        >
          Book Now
        </motion.button>
      </a>
    </div>
  </motion.div>
);

export default FeaturedRoomsSection;