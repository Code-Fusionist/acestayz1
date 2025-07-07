
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const DestinationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const destinations = [
    { name: 'Delhi', properties: '25+ Properties', rating: 4.8 },
    { name: 'Gurugram', properties: '18+ Properties', rating: 4.9 },
    { name: 'Jaipur', properties: '12+ Properties', rating: 4.7 },
    { name: 'Noida', properties: '15+ Properties', rating: 4.8 },
    { name: 'Mohali', properties: '8+ Properties', rating: 4.9 }
  ];

  return (
    <section id="destinations" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Stay Where You
            <span className="text-ace-gold block">Belong</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Choose your perfect destination and let the journey begin.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer hover:scale-105 h-full"
                  >
                    <MapPin className="w-8 h-8 text-ace-dark mb-2 group-hover:text-ace-gold transition-colors" />
                    <h3 className="text-lg font-semibold text-ace-dark group-hover:text-ace-gold font-poppins">{destination.name}</h3>
                    <div className="flex items-center space-x-1 mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-gray-600">{destination.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 font-poppins">{destination.properties}</p>
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ace-dark text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-ace-gold transition-colors duration-300 shadow-xl font-poppins"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSection;
