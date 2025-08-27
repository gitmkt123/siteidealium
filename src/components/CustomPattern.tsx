import React from 'react';

interface CustomPatternProps {
  variant?: 'dots' | 'lines' | 'organic';
  className?: string;
  opacity?: number;
}

const CustomPattern: React.FC<CustomPatternProps> = ({ 
  variant = 'organic', 
  className = '', 
  opacity = 0.1 
}) => {
  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return (
          <svg className={`w-full h-full ${className}`} style={{ opacity }}>
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#00FF88" opacity="0.3" />
                <circle cx="5" cy="8" r="1" fill="#00CC6A" opacity="0.2" />
                <circle cx="35" cy="32" r="1.5" fill="#00FF88" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
      
      case 'lines':
        return (
          <svg className={`w-full h-full ${className}`} style={{ opacity }}>
            <defs>
              <pattern id="lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0,30 Q15,10 30,30 T60,30" stroke="#00FF88" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M0,45 Q20,25 40,45 T80,45" stroke="#00CC6A" strokeWidth="0.5" fill="none" opacity="0.2" />
                <path d="M-10,15 Q10,5 30,15 T70,15" stroke="#00FF88" strokeWidth="0.8" fill="none" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
        );
      
      case 'organic':
      default:
        return (
          <svg className={`w-full h-full ${className}`} style={{ opacity }}>
            <defs>
              <pattern id="organic" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Organic shapes */}
                <path 
                  d="M20,40 Q35,20 50,40 Q65,60 80,40 Q95,20 110,40" 
                  stroke="#00FF88" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.2"
                />
                <ellipse 
                  cx="30" 
                  cy="80" 
                  rx="8" 
                  ry="12" 
                  fill="#00CC6A" 
                  opacity="0.15" 
                  transform="rotate(25 30 80)"
                />
                <path 
                  d="M70,70 Q85,85 100,70 Q115,55 130,70" 
                  stroke="#00FF88" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.25"
                />
                <circle cx="15" cy="15" r="3" fill="#00FF88" opacity="0.2" />
                <ellipse 
                  cx="90" 
                  cy="20" 
                  rx="6" 
                  ry="4" 
                  fill="#00CC6A" 
                  opacity="0.18" 
                  transform="rotate(-15 90 20)"
                />
                <path 
                  d="M10,100 Q25,110 40,100 Q55,90 70,100" 
                  stroke="#00CC6A" 
                  strokeWidth="0.8" 
                  fill="none" 
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic)" />
          </svg>
        );
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {renderPattern()}
    </div>
  );
};

export default CustomPattern;