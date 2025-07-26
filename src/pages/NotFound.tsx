import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-ace-gold mb-4">404</div>
            <div className="w-24 h-1 bg-ace-gold mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-ace-dark mb-4 font-poppins">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The page you're looking for seems to have checked out. 
              Let's get you back to exploring our amazing stays!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/")}
                className="bg-ace-gold text-white hover:bg-ace-dark transition-colors duration-300 px-6 py-3 rounded-full"
              >
                <Home size={20} className="mr-2" />
                Go Home
              </Button>
              
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="border-ace-gold text-ace-gold hover:bg-ace-gold hover:text-white transition-all duration-300 px-6 py-3 rounded-full"
              >
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Need help? <a href="/contact" className="text-ace-gold hover:underline">Contact us</a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
