
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
    <section className="py-6 sm:py-8 bg-tan-brown overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee-brown mb-4">
            Corporate Partners
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto font-poppins">
            Trusted By Big Brands.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-7 gap-4 max-w-6xl mx-auto">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 h-full flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="h-12 w-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2">
              {logos.map((logo, idx) => (
                <CarouselItem key={idx} className="pl-1 sm:pl-2 basis-1/2 sm:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-3 sm:p-4 h-full flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${idx + 1}`}
                      className="h-10 sm:h-12 w-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
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

export default PartnersSection;
