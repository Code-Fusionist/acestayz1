
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [
    '/partners/as.png',
    '/partners/fh.png',
    '/partners/hcl.png',
    '/partners/lt.png',
    '/partners/offs.png',
    '/partners/paytm.jpg',
    '/partners/tm.png',
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Our Esteemed <span className="text-ace-gold block">Partners</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Collaborating with the finest hospitality brands to deliver exceptional experiences.
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
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-full flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${idx + 1}`}
                      className="h-16 w-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
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

export default PartnersSection;
