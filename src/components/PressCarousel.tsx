
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
    image: 'media/bus-Stan.png',
    title: 'BUSINESS STANDARD',
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
    image: 'media/tribune.png',
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
    <section className="py-6 sm:py-8 bg-tan-brown overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-coffee-brown mb-4">
          Media Coverage
        </h2>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Slide controls */}
        <div className="flex justify-center gap-2 mb-4">
          <button 
            onClick={() => {}}
            className="w-2 h-2 rounded-full bg-coffee-brown/50 hover:bg-coffee-brown transition-colors"
          />
          <button 
            onClick={() => {}}
            className="w-2 h-2 rounded-full bg-coffee-brown/50 hover:bg-coffee-brown transition-colors"
          />
          <button 
            onClick={() => {}}
            className="w-2 h-2 rounded-full bg-coffee-brown transition-colors"
          />
        </div>
        
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: [0, -1400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            },
          }}
        >
          {duplicatedPublications.map((publication, index) => (
            <div
              key={`${publication.id}-${index}`}
              className="flex-shrink-0 w-80 bg-sand-beige rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
