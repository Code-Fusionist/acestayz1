'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import hotelInterior from '/specialservice/2.png';
import hotelRoom from '/specialservice/1.png';
import hotelServices from '/specialservice/3.png';

const features = [
  {
    title: "Hybrid Model",
    description: "Fastest growing hybrid hotel chain with in room kitchenette.",
    image: hotelRoom,
  },
  {
    title: "Premium Feel",
    description: "Design-led hotels – not just rooms, it's a mood.\nFeel the style, live the vibe.",
    image: hotelInterior,
  },
  {
    title: "Break The Rules",
    description:
      "No nonsense hotel rules! \nFood delivery? Always welcome.\nFlexible breakfast timings. \nEasy check-in, late checkout (Subject to availability).",
    image: hotelServices,
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-10 px-4 sm:px-8 bg-tan-brown parallax-bg" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-poppins text-3xl lg:text-5xl font-bold text-white mb-6 parallax-slow"
        >
          The Magic of <span className="text-sand-beige block mt-2">Ace Stayz</span>
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, idx) => (
              <CarouselItem
                key={idx}
                className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full scroll-reveal"
                >
                  <div className="relative w-full h-[300px] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-coffee-brown mb-3 font-poppins group-hover:text-tan-brown transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="text-gray-600 text-sm leading-relaxed font-poppins space-y-1">
                      {feature.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-ace-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedSection;
