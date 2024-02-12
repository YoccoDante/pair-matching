import React from 'react'

interface LockIconProps {
  width?: string;
  height?: string;
  onClick?:() => void;
}

const LockIcon: React.FC<LockIconProps> = ({ width, height, onClick}) => {
  return (
    <img 
      onClick={onClick}
      src="/switchable-icon.svg" 
      alt="star" 
      style={{ 
        fill: 'white', 
        width: width || '25px', 
        height: height || '25px'
      }} 
    />
  )
}

export default LockIcon;