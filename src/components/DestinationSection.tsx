
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
            Explor
            <span className="text-ace-gold block">ACE STAYZ</span>
          </h2>
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
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.name} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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

export default DestinationSection;
