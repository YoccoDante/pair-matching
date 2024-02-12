import React from 'react'

interface LockIconProps {
  width?: string;
  height?: string;
}

const LockIcon: React.FC<LockIconProps> = ({ width, height }) => {
  return (
    <img 
      src="/star-icon.svg" 
      alt="star" 
      style={{ 
        fill: 'white', 
        width: width || '25px', 
        height: height || '25px',
      }} 
    />
  )
}

export default LockIcon;