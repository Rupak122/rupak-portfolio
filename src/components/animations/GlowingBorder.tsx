
import React, { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  elegant?: boolean;
}

const GlowingBorder = ({ 
  children, 
  className = "", 
  glowColor = "rgba(99, 102, 241, 0.4)",
  elegant = false
}: GlowingBorderProps) => {
  if (elegant) {
    return (
      <div 
        className={`relative p-[1px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl ${className}`}
        style={{
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)`,
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
        }}
      >
        <div className="relative z-10 w-full h-full rounded-[inherit] overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className={`relative p-[1px] rounded-lg overflow-hidden ${className} hover:shadow-lg transition-all duration-300`}
      style={{
        background: `
          linear-gradient(
            90deg,
            rgba(81, 85, 214, 0.3) 0%,
            rgba(99, 102, 241, 0.6) 25%,
            rgba(129, 140, 248, 0.6) 50%,
            rgba(99, 102, 241, 0.6) 75%,
            rgba(81, 85, 214, 0.3) 100%
          )
        `,
        backgroundSize: '200% 100%',
        animation: 'gradient-shift 8s linear infinite'
      }}
    >
      <div className="relative z-10 w-full h-full rounded-[inherit] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
