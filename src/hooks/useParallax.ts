import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const rate = scrolled * speed;
        elementRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useLayeredParallax = () => {
  const backgroundRef = useRef<HTMLElement>(null);
  const foregroundRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (backgroundRef.current) {
        const rect = backgroundRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
          const rate = scrolled * 0.3; // Slower for background
          backgroundRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      }
      
      if (foregroundRef.current) {
        const rect = foregroundRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
          const rate = scrolled * -0.1; // Opposite direction for foreground
          foregroundRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { backgroundRef, foregroundRef };
};

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};