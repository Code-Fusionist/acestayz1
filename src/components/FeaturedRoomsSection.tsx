import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const FeaturedRoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const properties = [
    {
      name: 'ACE STAYZ',
      image: '/rooms/vk.jpg',
      location: 'Vasant Kunj, Delhi',
      bookingLink: 'https://www.zotel.ai/website/234'
    },
    {
      name: 'ACE STAYZ',
      image: '/rooms/dlf.avif',
      location: 'DLF Phase-1, Gurugram',
      bookingLink: 'https://www.zotel.ai/website/468'
    },
    {
      name: 'ACE STAYZ',
      image: '/rooms/jaipur.png',
      location: 'Pink City, Jaipur',
      bookingLink: 'https://www.zotel.ai/website/333'
    },
    {
      name: 'ACE STAYZ',
      image: '/rooms/noida.png',
      location: 'Sector 70, Noida',
      bookingLink: 'https://www.zotel.ai/website/469'
    }
  ];

  return (
    <section className="py-6 sm:py-8 bg-coffee-brown parallax-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-sand-beige mb-2">
            Explore ACE STAYZ
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {properties.map((property, index) => (
            <PropertyCard key={property.name} property={property} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2">
              {properties.map((property, index) => (
                <CarouselItem key={property.name} className="pl-1 sm:pl-2 basis-4/5 sm:basis-1/2">
                  <PropertyCard property={property} index={index} isInView={isInView} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
    className="bg-sand-beige rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 scroll-reveal h-full"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-3 sm:p-4">
      <h3 className="font-poppins text-sm sm:text-base font-bold text-coffee-brown mb-2">{property.name}</h3>
      <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-3">
        <MapPin size={12} className="mr-1" />
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
          className="w-full bg-tan-brown text-white py-2 rounded-lg font-medium hover:bg-coffee-brown transition-colors duration-200 font-poppins text-xs sm:text-sm"
        >
          Book Now
        </motion.button>
      </a>
    </div>
  </motion.div>
);

export default FeaturedRoomsSection;
