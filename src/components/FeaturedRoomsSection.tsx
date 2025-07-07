
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bed, Users, Wifi, Car } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const FeaturedRoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rooms = [
    {
      name: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      price: '₹8,999',
      capacity: '2-3 Guests',
      amenities: ['King Bed', 'City View', 'Wi-Fi', 'Parking'],
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      price: '₹5,999',
      capacity: '2 Guests',
      amenities: ['Queen Bed', 'Garden View', 'Wi-Fi', 'Breakfast'],
      rating: 4.8,
      reviews: 203
    },
    {
      name: 'Premium Studio',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      price: '₹12,999',
      capacity: '4 Guests',
      amenities: ['2 Beds', 'Balcony', 'Kitchenette', 'Parking'],
      rating: 4.9,
      reviews: 89
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Bed')) return <Bed className="w-4 h-4" />;
    if (amenity.includes('Wi-Fi')) return <Wifi className="w-4 h-4" />;
    if (amenity.includes('Parking')) return <Car className="w-4 h-4" />;
    return <Users className="w-4 h-4" />;
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#D2B48C' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-white mb-6">
            Suite Dreams 
            <span className="text-ace-dark block">Begin Here</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-poppins">
            From cozy comfort to luxurious suites — explore the spaces that suit you best.
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
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {rooms.map((room, index) => (
                <CarouselItem key={room.name} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift group h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-ace-dark text-sm font-medium font-poppins">{room.price}/night</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-poppins text-xl font-bold text-ace-dark">{room.name}</h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600">{room.rating} ({room.reviews})</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 flex items-center font-poppins">
                        <Users className="w-4 h-4 mr-2" />
                        {room.capacity}
                      </p>

                      <div className="space-y-2 mb-6">
                        {room.amenities.map((amenity, idx) => (
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-ace-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-dark hover:text-white transition-all duration-300 shadow-xl font-poppins"
          >
            View All Suites
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRoomsSection;
