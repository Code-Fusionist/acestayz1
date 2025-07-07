
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Target, Rocket, Award } from 'lucide-react';

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Research",
      subtitle: "Listen, Comprehend And Research",
      description: "This stage is primarily about establishing the foundations. Exploratory discussions are held to build the project's framework, and intelligent questioning is used to clarify the goals.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-red-500"
    },
    {
      id: 1,
      title: "Strategy",
      subtitle: "Conceptualize, Strategize And Plan",
      description: "We develop comprehensive strategies based on market research and analysis to ensure optimal positioning and competitive advantage.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-gray-700"
    },
    {
      id: 2,
      title: "Action",
      subtitle: "Execute, Improvise And Analyze",
      description: "Implementation phase where we execute our strategic plans with continuous monitoring and adjustments for optimal results.",
      icon: <Rocket className="w-8 h-8" />,
      color: "bg-red-500"
    },
    {
      id: 3,
      title: "Result",
      subtitle: "Achieve, Improve And Iterate",
      description: "Delivering measurable results while continuously improving and iterating for sustained growth and success.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-gray-700"
    }
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
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-ace-dark mb-4">
            Our Creative Process
          </h2>
          <h3 className="font-poppins text-4xl lg:text-5xl font-bold text-ace-dark mb-8">
            How We Work
          </h3>
        </motion.div>

        {/* Steps Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveStep(step.id)}
              className={`cursor-pointer p-4 rounded-xl text-center transition-all duration-300 ${
                activeStep === step.id 
                  ? 'bg-ace-gold text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="font-poppins font-bold text-lg mb-2">{step.title}</div>
              <div className={`h-1 rounded-full transition-all duration-300 ${
                activeStep === step.id ? 'bg-white' : 'bg-gray-300'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                {step.icon}
              </div>
              <div className="text-white text-sm font-bold px-4 py-1 bg-red-500 rounded-full inline-block mb-4">
                STEP {String(step.id + 1).padStart(2, '0')}
              </div>
              <h3 className="font-poppins text-xl font-bold text-ace-dark mb-2">
                {step.subtitle}
              </h3>
            </motion.div>
          ))}
        </div>

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
              {steps[activeStep].title} Phase
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
