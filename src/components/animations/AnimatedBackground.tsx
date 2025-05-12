
import React, { ReactNode } from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'gradient' | 'grid' | 'dots';
}

const AnimatedBackground = ({ 
  children, 
  className = "", 
  variant = 'grid'
}: AnimatedBackgroundProps) => {
  
  const getBackgroundStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          background: 'linear-gradient(120deg, #1a1f3820, #2c213b20, #1a1f3820)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        };
      case 'dots':
        return {
          backgroundImage: 'radial-gradient(circle, #6366f120 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'pulse 3s ease-in-out infinite'
        };
      case 'grid':
      default:
        return {
          backgroundImage: 'linear-gradient(to right, #6366f110 1px, transparent 1px), linear-gradient(to bottom, #6366f110 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        };
    }
  };
  
  return (
    <div 
      className={`relative ${className}`}
      style={getBackgroundStyles()}
    >
      {children}
    </div>
  );
};

export default AnimatedBackground;
