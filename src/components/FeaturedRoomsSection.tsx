import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface FeaturedRoomsSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
}

const FeaturedRoomsSection = ({
  title,
  subtitle,
  backgroundColor,
  textColor = 'text-ace-dark'
}: FeaturedRoomsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const properties = [
    {
      name: 'Royal Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      location: 'Connaught Place, Delhi',
      rating: 4.9,
      price: '₹8,999',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Luxury Deluxe Room',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      location: 'Cyber City, Gurugram',
      rating: 4.8,
      price: '₹6,999',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Premium Studio',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      location: 'Pink City, Jaipur',
      rating: 4.9,
      price: '₹7,499',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Heritage Villa',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      location: 'Sector 18, Noida',
      rating: 4.7,
      price: '₹5,999',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Business Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop',
      location: 'IT City, Mohali',
      rating: 4.8,
      price: '₹6,499',
      bookingLink: 'tel:+919403890926'
    },
    {
      name: 'Penthouse Villa',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
      location: 'Golf Course Road, Gurugram',
      rating: 4.9,
      price: '₹12,999',
      bookingLink: 'tel:+919403890926'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 relative overflow-hidden ${backgroundColor || 'bg-gray-50'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <Carousel
            opts={{ align: 'start', loop: true }}
            // @ts-ignore: Suppress type warning for plugin
            plugins={[Autoplay({ delay: 3500 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {properties.map((property, index) => (
                <CarouselItem key={property.name} className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5">
                  <PropertyCard property={property} index={index} isInView={isInView} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.name} property={property} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Property Card Component
const PropertyCard = ({
  property,
  index,
  isInView
}: {
  property: {
    name: string;
    image: string;
    location: string;
    rating: number;
    price: string;
    bookingLink: string;
  };
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden group h-full"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
        <Star size={14} className="text-ace-gold fill-current" />
        <span className="text-sm font-medium">{property.rating}</span>
      </div>
    </div>

    <div className="p-6 flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="font-poppins text-xl font-bold text-ace-dark mb-2">{property.name}</h3>
        <p className="text-gray-600 text-sm flex items-center font-poppins mb-2">
          <MapPin size={14} className="mr-1" />
          {property.location}
        </p>
        <p className="text-ace-gold text-lg font-bold font-poppins">{property.price}/night</p>
      </div>

      <a href={property.bookingLink}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-ace-gold text-white py-3 rounded-full font-medium hover:bg-ace-dark transition-colors duration-200 font-poppins w-full"
        >
          Book Now
        </motion.button>
      </a>
    </div>
  </motion.div>
);

export default FeaturedRoomsSection;
