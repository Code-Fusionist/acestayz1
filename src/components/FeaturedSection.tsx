'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import hotelInterior from '../assets/hotel-interior-1.jpg';
import hotelRoom from '../assets/hotel-room-premium.jpg';
import hotelServices from '../assets/hotel-services.jpg';

const features = [
  {
    title: "Hybrid Model",
    description:
      "Stay your way. Not everyone wants to step out for every meal, and we get that. Our hybrid rooms come with a fully equipped kitchen—so you can cook, order in, or just have your midnight chai moment without stepping outside. It’s your space. Use it how you like.",
    image: hotelRoom,
  },
  {
    title: "Premium Feel",
    description:
      "Everything you need. Nothing overdone. Think clean spaces, elegant design, soft lighting, and thoughtful touches. We focus on what actually matters—comfort, privacy, and good taste. No fluff, just a calm and premium stay that feels personal.",
    image: hotelInterior,
  },
  {
    title: "Break The Rules",
    description:
      "No Nonsense Hospitality. We keep things simple. Want to order food online? Go ahead. Need a little extra time to check out? If the room's free, it's yours. We try to say yes whenever we can. No silly rules, no surprise charges—just a stay that feels easy, like it should.",
    image: hotelServices,
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-10 px-4 sm:px-8 bg-ace-gold" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-ace-dark drop-shadow-lg mb-3 font-poppins"
        >
          <h2 className="font-poppins text-3xl lg:text-5xl font-bold text-ace-dark mb-6">
            The Magic of <span className="text-white block">Ace Stayz</span>
          </h2>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-ace-dark font-poppins"
        >
          With so much to tell & so little time, here are a few key highlights.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
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
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
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
                    <h3 className="text-xl font-bold text-ace-dark mb-3 font-poppins group-hover:text-ace-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      {feature.description}
                    </p>
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