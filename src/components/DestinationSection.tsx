
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const DestinationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const destinations = [
    { name: 'Delhi', rating: 4.4 },
    { name: 'Gurugram', rating: 4.2 },
    { name: 'Jaipur', rating: 4.3 },
    { name: 'Noida', rating: 4.4 },
    { name: 'Mohali', rating: 4.1 }
  ];

  return (
    <section id="destinations" className="py-6 sm:py-8 bg-tan-brown relative overflow-hidden parallax-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee-brown mb-4">
            We Are Live
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-4 max-w-4xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-4 bg-sand-beige rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer hover:scale-105 h-full scroll-reveal"
            >
              <MapPin className="w-6 h-6 text-coffee-brown mb-2 group-hover:text-tan-brown transition-colors" />
              <h3 className="text-sm font-semibold text-coffee-brown group-hover:text-tan-brown font-poppins">{destination.name}</h3>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs text-gray-600">{destination.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2">
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.name} className="pl-1 sm:pl-2 basis-2/3 sm:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col items-center text-center p-3 sm:p-4 bg-sand-beige rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer hover:scale-105 h-full scroll-reveal"
                  >
                    <MapPin className="w-6 h-6 text-coffee-brown mb-2 group-hover:text-tan-brown transition-colors" />
                    <h3 className="text-sm font-semibold text-coffee-brown group-hover:text-tan-brown font-poppins">{destination.name}</h3>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-gray-600">{destination.rating}</span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default DestinationSection;
