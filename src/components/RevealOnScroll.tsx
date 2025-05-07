
import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  direction = 'up'
}) => {
  // Using useState and useRef safely
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Make sure we're in a browser environment
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            if (entry.target) {
              entry.target.classList.add('active');
            }
          }, delay);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  const getTransformClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };
  
  return (
    <div 
      ref={ref} 
      className={`reveal ${getTransformClass()} opacity-0 transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
