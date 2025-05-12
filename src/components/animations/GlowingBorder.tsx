
import React, { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowingBorder = ({ 
  children, 
  className = "", 
  glowColor = "rgba(99, 102, 241, 0.4)"
}: GlowingBorderProps) => {
  return (
    <div 
      className={`relative p-[1px] rounded-lg overflow-hidden ${className}`}
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
