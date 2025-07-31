import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const FeaturedRoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const properties = [
    {
      name: 'ACE STAYZ',
      image: '/media/ani.jpg',
      location: 'Vasant Kunj, Delhi',
      bookingLink: 'https://www.zotel.ai/website/234'
    },
    {
      name: 'ACE STAYZ',
      image: '/media/tribune.png',
      location: 'DLF Phase-1, Gurugram',
      bookingLink: 'https://www.zotel.ai/website/468'
    },
    {
      name: 'ACE STAYZ',
      image: '/media/bus-Stan.png',
      location: 'Pink City, Jaipur',
      bookingLink: 'https://www.zotel.ai/website/333'
    },
    {
      name: 'ACE STAYZ',
      image: '/media/Nationtv.png',
      location: 'Sector 70, Noida',
      bookingLink: 'https://www.zotel.ai/website/469'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-sand-beige parallax-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-tan-brown mb-6 parallax-fast">
            Suite Dreams
            <span className="text-coffee-brown block mt-2">Begins Here</span>
          </h2>
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
    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 scroll-reveal"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className="font-poppins text-xl font-bold text-coffee-brown mb-3">{property.name}</h3>
      <div className="flex items-center text-gray-600 text-sm mb-6">
        <MapPin size={16} className="mr-2" />
        <span className="font-poppins">{property.location}</span>
      </div>

      <a
        href={property.bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-tan-brown text-white py-3 rounded-lg font-medium hover:bg-coffee-brown transition-colors duration-200 font-poppins"
        >
          Book Now
        </motion.button>
      </a>
    </div>
  </motion.div>
);

export default FeaturedRoomsSection;
