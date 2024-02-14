import React, { useEffect, useState } from 'react';

interface GameIconProps {
  width?: string;
  height?: string;
  onClick?: () => void;
  type: 'arrow-back' | 'music' | 'star' | 'switchable' | 'volume-control' | 'animated-bg' | 'retry' | 'info' | 'lock';
  isActive?: boolean;
}

const GameIcon: React.FC<GameIconProps> = ({ width, height, onClick, type, isActive = true }) => {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    switch (type) {
      case 'arrow-back':
        setIcon('/arrow-down-icon.svg');
        break;
      case 'music':
        setIcon('/music-icon.svg');
        break;
      case 'star':
        setIcon('/star-icon.svg');
        break;
      case 'switchable':
        setIcon('/switchable-icon.svg');
        break;
      case 'volume-control':
        setIcon('/volume-control-icon.svg');
        break;
      case 'animated-bg':
        setIcon('/animated-bg-icon.svg');
        break;
      case 'retry':
        setIcon('/retry-icon.svg');
        break;
      case 'info':
        setIcon('/info-icon.svg');
        break;
      case 'lock':
        setIcon('/lock-icon.svg');
        break;
      default:
        // Handle the case where type does not match any of the above
        break;
    }
  }, [type]);

  const transform = type === 'arrow-back' ? 'rotate(90deg)' : 'none';

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={icon}
        alt="icon"
        style={{
          fill: 'white',
          width: width || '60px',
          height: height || '60px',
          transform: transform,
          cursor: 'pointer'
        }}
        onClick={onClick}
      />
      {!isActive && (
        <img
          src='/close-icon.svg'
          alt='close icon'
          style={{
            position: 'absolute',
            width: width || '60px',
            height: height || '60px',
            cursor:'pointer'
          }}
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default GameIcon;