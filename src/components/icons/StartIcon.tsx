import React from 'react'

interface StartIconProps {
  width?: string;
  height?: string;
  isTransparent?: boolean;
}

const StartIcon: React.FC<StartIconProps> = ({ width, height, isTransparent = false }) => {
  return (
    <img 
      src="/star-icon.svg" 
      alt="star" 
      style={{ 
        fill: 'white', 
        width: width || '25px', 
        height: height || '25px',
        opacity: isTransparent ? 0.5 : 1, // Add this line
      }} 
    />
  )
}

export default StartIcon;