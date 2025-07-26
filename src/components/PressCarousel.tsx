
import { motion } from 'framer-motion';

const pressPublications = [
  {
    id: 1,
    image: 'media/ani.jpg',
    title: 'ANI NEWS',
    description: 'Featured article about our expansion'
  },
  {
    id: 2,
    image: 'media/bus-Stan.jpg',
    title: 'BUSINESS STANDARDS',
    description: 'Business feature on hospitality innovation'
  },
  {
    id: 3,
    image: 'media/Nationtv.png',
    title: 'NEWS NATIONTV',
    description: 'Award recognition for best service'
  },
  {
    id: 4,
    image: 'media/tribune.webp',
    title: 'THE TRIBUNE NEWS',
    description: 'Technology integration spotlight'
  }
  // {
  //   id: 5,
  //   image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=200&fit=crop',
  //   title: 'Business Standard',
  //   description: 'Growth story coverage'
  // },
  // {
  //   id: 6,
  //   image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop',
  //   title: 'Hotel Magazine',
  //   description: 'Industry leadership feature'
  // }
];

const PressCarousel = () => {
  // Duplicate the array to create seamless loop
  const duplicatedPublications = [...pressPublications, ...pressPublications];

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            <span className="text-ace-gold block">Media Coverage</span>
          </h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPublications.map((publication, index) => (
            <div
              key={`${publication.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={publication.image}
                alt={publication.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-ace-dark mb-2 font-poppins">
                  {publication.title}
                </h3>
                <p className="text-gray-600 text-sm font-poppins">
                  {publication.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressCarousel;
