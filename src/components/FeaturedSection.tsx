'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import hybridModelVector from '@/assets/hybrid-model-vector.png';
import premiumFeelVector from '@/assets/premium-feel-vector.png';
import breakRulesVector from '@/assets/break-rules-vector.png';

const features = [
  {
    title: "Hybrid Model",
    description: "Fastest growing hybrid hotel chain with in room kitchenette.",
    image: hybridModelVector,
  },
  {
    title: "Premium Feel",
    description: "Design-led hotels – not just rooms, it's a mood.\nFeel the style, live the vibe.",
    image: premiumFeelVector,
  },
  {
    title: "Break The Rules",
    description:
      "No nonsense hotel rules! \nFood delivery? Always welcome.\nFlexible breakfast timings. \nEasy check-in, late checkout (Subject to availability).",
    image: breakRulesVector,
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-8 bg-tan-brown parallax-bg" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee-brown mb-4 parallax-slow"
        >
          The Magic of Ace Stayz
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: 'start',
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
            {features.map((feature, idx) => (
              <CarouselItem
                key={idx}
                className="pl-1 sm:pl-2 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="group bg-sand-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full scroll-reveal"
                >
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="eager"
                      style={{ 
                        imageRendering: 'auto',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-poppins group-hover:text-tan-brown transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="text-black text-xs sm:text-sm leading-relaxed font-poppins space-y-1">
                      {feature.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedSection;
