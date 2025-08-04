import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const pressPublications = [
  {
    id: 1,
    image: 'media/ani.jpg',
    title: 'ANI NEWS',
    description: 'Featured article about our expansion',
    link: 'https://www.aninews.in/news/business/ace-stayz-on-fire-20-premium-hybrid-hotels-across-india-by-year-end-rapid-growth-fueled-by-franchise-model20250701115419/'
  },
  {
    id: 2,
    image: 'media/bus-Stan.png',
    title: 'BUSINESS STANDARD',
    description: 'Business feature on hospitality innovation',
    link: 'https://www.business-standard.com/content/press-releases-ani/ace-stayz-on-fire-20-premium-hybrid-hotels-across-india-by-year-end-rapid-growth-fueled-by-franchise-model-125070100824_1.html'
  },
  {
    id: 3,
    image: 'media/Nationtv.png',
    title: 'NEWS NATIONTV',
    description: 'Award recognition for best service',
    link: 'https://english.newsnationtv.com/brand-stories/brand-stories-english/turning-dreams-into-crores-aditya-parashars-journey-from-8000-to-indias-next-big-hotel-chain-9074631'
  },
  {
    id: 4,
    image: 'media/tribune.png',
    title: 'THE TRIBUNE NEWS',
    description: 'Technology integration spotlight',
    link: 'https://www.tribuneindia.com/news/advertorial-disclaimer/ace-stayz-on-fire-20-premium-hybrid-hotels-across-india-by-year-end-rapid-growth-fueled-by-franchise-model'
  }
];

const PressCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-6 sm:py-8 bg-tan-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee-brown">
            Featured
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {pressPublications.map((item, index) => (
            <PressCard key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
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
            <CarouselContent className="-ml-1 sm:-ml-2">
              {pressPublications.map((item, index) => (
                <CarouselItem key={item.id} className="pl-1 sm:pl-2 basis-4/5 sm:basis-1/2">
                  <PressCard item={item} index={index} isInView={isInView} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// PressCard Component
const PressCard = ({
  item,
  index,
  isInView
}: {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
  };
  index: number;
  isInView: boolean;
}) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-sand-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full group"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-poppins text-sm sm:text-base font-bold text-coffee-brown mb-2">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 font-poppins">
          {item.description}
        </p>
      </div>
    </motion.div>
  </a>
);

export default PressCarousel;
