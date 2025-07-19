import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bed, Users, Wifi, Car, Star, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface PropertiesSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
}

const PropertiesSection = ({ title, subtitle, backgroundColor, textColor = 'text-ace-dark' }: PropertiesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const properties = [
    {
      name: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      price: '₹8,999',
      location: 'Connaught Place, Delhi',
      capacity: '2-3 Guests',
      amenities: ['King Bed', 'City View', 'Wi-Fi', 'Parking'],
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      price: '₹5,999',
      location: 'Cyber City, Gurugram',
      capacity: '2 Guests',
      amenities: ['Queen Bed', 'Garden View', 'Wi-Fi', 'Breakfast'],
      rating: 4.8,
      reviews: 203
    },
    {
      name: 'Premium Studio',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      price: '₹12,999',
      location: 'Pink City, Jaipur',
      capacity: '4 Guests',
      amenities: ['2 Beds', 'Balcony', 'Kitchenette', 'Parking'],
      rating: 4.9,
      reviews: 89
    },
    {
      name: 'Heritage Stay',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      price: '₹6,999',
      location: 'Sector 18, Noida',
      capacity: '2-4 Guests',
      amenities: ['Double Bed', 'Mall View', 'Wi-Fi', 'Metro Access'],
      rating: 4.7,
      reviews: 124
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Bed')) return <Bed className="w-4 h-4" />;
    if (amenity.includes('Wi-Fi')) return <Wifi className="w-4 h-4" />;
    if (amenity.includes('Parking')) return <Car className="w-4 h-4" />;
    return <Users className="w-4 h-4" />;
  };

  return (
    <section 
      className={`py-20 lg:py-32 relative overflow-hidden ${backgroundColor || 'bg-gray-50'}`}
    >
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

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {properties.map((property, index) => (
                <CarouselItem key={property.name} className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift group h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-ace-dark text-sm font-medium font-poppins">{property.price}/night</span>
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star size={14} className="text-ace-gold fill-current" />
                        <span className="text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="font-poppins text-xl font-bold text-ace-dark mb-2">{property.name}</h3>
                        <p className="text-gray-600 text-sm flex items-center font-poppins">
                          <MapPin size={14} className="mr-1" />
                          {property.location}
                        </p>
                      </div>

                      <p className="text-gray-600 mb-4 flex items-center font-poppins">
                        <Users className="w-4 h-4 mr-2" />
                        {property.capacity}
                      </p>

                      <div className="space-y-2 mb-6">
                        {property.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                            {getAmenityIcon(amenity)}
                            <span className="font-poppins">{amenity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-ace-gold text-white py-3 rounded-full font-medium hover:bg-ace-dark transition-colors duration-200 font-poppins"
                        >
                          Book Now
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 border-2 border-ace-gold text-ace-gold py-3 rounded-full font-medium hover:bg-ace-gold hover:text-white transition-all duration-200 font-poppins"
                        >
                          Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;