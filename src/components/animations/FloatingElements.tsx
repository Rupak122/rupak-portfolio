
import React, { ReactNode } from 'react';

interface FloatingElementsProps {
  children: ReactNode;
  count?: number;
  size?: number;
  className?: string;
}

const FloatingElements = ({ 
  children, 
  count = 5, 
  size = 8, 
  className = "" 
}: FloatingElementsProps) => {
  const elements = [];
  
  for (let i = 0; i < count; i++) {
    const delay = Math.random() * 5;
    const duration = 5 + Math.random() * 10;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const animationType = i % 3;
    
    elements.push(
      <div
        key={i}
        className={`absolute rounded-full ${animationType === 0 ? 'animate-float' : animationType === 1 ? 'animate-float-delay-1' : 'animate-float-delay-2'} pointer-events-none`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: 'currentColor',
          opacity: 0.1,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {elements}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingElements;
