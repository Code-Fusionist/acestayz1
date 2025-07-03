
import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference transition-opacity duration-200"
      style={{
        left: mousePosition.x - 20,
        top: mousePosition.y - 20,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-10 h-10 relative">
        {/* Suitcase body */}
        <div className="w-8 h-6 bg-ace-gold rounded-sm relative">
          {/* Handle */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 border-2 border-ace-gold rounded-full"></div>
          {/* Lock */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-ace-dark rounded-full"></div>
        </div>
        {/* Wheels */}
        <div className="absolute -bottom-1 left-1 w-2 h-2 bg-ace-dark rounded-full"></div>
        <div className="absolute -bottom-1 right-1 w-2 h-2 bg-ace-dark rounded-full"></div>
        {/* Pull handle */}
        <div className="absolute -right-2 top-0 w-1 h-6 bg-ace-gold rounded-full"></div>
      </div>
    </div>
  );
};

export default AnimatedCursor;
