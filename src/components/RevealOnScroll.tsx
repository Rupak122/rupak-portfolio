
import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  animation?: 'fade' | 'slide' | 'scale' | 'flip' | 'rotate' | 'bounce';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  direction = 'up',
  animation = 'fade'
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
  
  const getInitialClasses = () => {
    const baseClasses = 'opacity-0 transition-all duration-1000';
    
    if (animation === 'fade') {
      switch (direction) {
        case 'up': return `${baseClasses} translate-y-10`;
        case 'down': return `${baseClasses} -translate-y-10`;
        case 'left': return `${baseClasses} translate-x-10`;
        case 'right': return `${baseClasses} -translate-x-10`;
        default: return `${baseClasses} translate-y-10`;
      }
    }
    
    if (animation === 'slide') {
      switch (direction) {
        case 'up': return `${baseClasses} translate-y-20`;
        case 'down': return `${baseClasses} -translate-y-20`;
        case 'left': return `${baseClasses} translate-x-20`;
        case 'right': return `${baseClasses} -translate-x-20`;
        default: return `${baseClasses} translate-y-20`;
      }
    }
    
    if (animation === 'scale') {
      return `${baseClasses} scale-95`;
    }
    
    if (animation === 'flip') {
      switch (direction) {
        case 'up': return `${baseClasses} rotateX-90`;
        case 'down': return `${baseClasses} -rotateX-90`;
        case 'left': return `${baseClasses} rotateY-90`;
        case 'right': return `${baseClasses} -rotateY-90`;
        default: return `${baseClasses} rotateX-90`;
      }
    }
    
    if (animation === 'rotate') {
      return `${baseClasses} rotate-12`;
    }
    
    if (animation === 'bounce') {
      return `${baseClasses} -translate-y-4`;
    }
    
    return baseClasses;
  };
  
  return (
    <div 
      ref={ref} 
      className={`reveal ${getInitialClasses()}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
