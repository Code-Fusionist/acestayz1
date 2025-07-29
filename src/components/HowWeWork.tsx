
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, UserRound, Star, Handshake } from 'lucide-react';

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Revenue Management",
      subtitle: "Revenue Management",
      description:
        "We will be doing strategic pricing through OTA, online & offline sales channels to maximize revenue.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-red-500",
    },
    {
      id: 1,
      title: "Design & Interiors",
      subtitle: "Design & Interiors",
      description:
        "We are building design-led hotels with impactful interiors that attract guests and boost bookings.",
      icon: <UserRound className="w-8 h-8" />,
      color: "bg-gray-700",
    },
    {
      id: 2,
      title: "Standard Operations Plan",
      subtitle: "Standard Operations Plan",
      description:
        "We provide a proven SOP model ensuring smooth day-to-day operations and consistent guest experience.",
      icon: <Star className="w-8 h-8" />,
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Hiring Support",
      subtitle: "Hiring Support",
      description:
        "We assist in hiring skilled staff with defined roles to ensure professional and efficient service.",
      icon: <Handshake className="w-8 h-8" />,
      color: "bg-gray-700",
    },
  ];



  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-ace-dark mb-4">
            Our Creative Process
          </h2>
        </motion.div>

        {/* Steps Overview - Single Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-2 md:gap-4 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveStep(step.id)}
              className={`cursor-pointer p-3 md:p-4 rounded-xl text-center transition-all duration-300 ${activeStep === step.id
                ? 'bg-ace-gold text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              <div className={`w-8 h-8 md:w-12 md:h-12 ${step.color} rounded-xl flex items-center justify-center text-white mb-2 mx-auto`}>
                <div className="scale-75 md:scale-100">{step.icon}</div>
              </div>
              <div className="font-poppins font-bold text-sm md:text-base mb-1">{step.title}</div>
              <div className={`h-1 rounded-full transition-all duration-300 ${activeStep === step.id ? 'bg-white' : 'bg-gray-300'
                }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center">
            <h4 className="font-poppins text-2xl font-bold text-ace-dark mb-4">
              {steps[activeStep].title}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {steps[activeStep].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
