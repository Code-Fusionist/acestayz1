
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Target, Rocket, Trophy, ArrowRight } from 'lucide-react';

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Listen, Comprehend And Research",
      subtitle: "Research",
      description: "This stage is primarily about establishing the foundations. Exploratory discussions are held to build the project's framework, and intelligent questioning is used to clarify the goals.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-red-500",
      textColor: "text-red-500"
    },
    {
      id: 1,
      title: "Conceptualize, Strategize And Plan",
      subtitle: "Strategy",
      description: "We develop comprehensive strategies based on our research findings, creating detailed plans that align with your business objectives and market opportunities.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-gray-800",
      textColor: "text-gray-800"
    },
    {
      id: 2,
      title: "Execute, Improvise And Analyze",
      subtitle: "Action",
      description: "Implementation phase where we put plans into action, continuously monitoring performance and making real-time adjustments for optimal results.",
      icon: <Rocket className="w-8 h-8" />,
      color: "bg-red-500",
      textColor: "text-red-500"
    },
    {
      id: 3,
      title: "Achieve, Improve And Iterate",
      subtitle: "Result",
      description: "Final phase focused on achieving goals, measuring success, and establishing systems for continuous improvement and sustainable growth.",
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-gray-800",
      textColor: "text-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Our Creative <span className="text-ace-gold">Process</span>
          </h2>
          <div className="text-6xl font-bold text-gray-900 mb-4 font-poppins">
            How We Work
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`${step.color} text-white px-6 py-3 rounded-t-3xl text-center font-bold font-poppins`}>
                STEP {String(index + 1).padStart(2, '0')}
              </div>
              <div className="bg-white border-2 border-gray-100 rounded-b-3xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className={`${step.textColor} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="font-poppins text-lg font-bold text-center mb-4 text-gray-900">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-6 py-3 rounded-full font-semibold font-poppins transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.subtitle}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Step Description */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${steps[activeStep].textColor} mb-6 flex justify-center`}>
              {steps[activeStep].icon}
            </div>
            <h3 className="font-poppins text-3xl font-bold text-gray-900 mb-6">
              {steps[activeStep].title}
            </h3>
            <p className="text-lg text-gray-600 font-poppins leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </motion.div>

        {/* Process Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <img
              src="/lovable-uploads/d02f6eb4-996b-4096-a928-133d25b9b256.png"
              alt="Creative Process Visualization"
              className="max-w-2xl w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
