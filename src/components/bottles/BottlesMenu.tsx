import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

interface BottlesMenuProps {
  open:boolean,
  bottles:number,
  setBottles:React.Dispatch<React.SetStateAction<number>>,
  setIsDraggable:React.Dispatch<React.SetStateAction<boolean>>,
  setPlaying:React.Dispatch<React.SetStateAction<boolean>>,
}

function BottlesMenu({open, bottles, setBottles, setIsDraggable, setPlaying}:BottlesMenuProps) {
    

    const handleIncrease = () => {
        if (bottles + 1 > 10) return
        setBottles(bottles+1)
    }

    const handleDecrease = () => {
        if (bottles - 1 < 3) return
        setBottles(bottles-1)
    }

    return (
      <Modal
          isOpen={open}
          style={{
              overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  background: '#ffe6cc',
                  borderRadius: '4px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease-out',
                  fontFamily: 'Comic Sans MS',
              },
          }}
      >
          <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#ff6600', transition: 'all 0.3s ease-out' }}>Bottles Game</p>
          <p style={{ fontSize: '20px', color: '#ff6600' }}>Select the quantity of bottles:</p>
          <input type='text' placeholder={String(bottles)} disabled style={{ marginBottom: '10px', fontSize: '20px', color: '#ff6600', transition: 'all 0.3s ease-out' }}/>
          <div style={{ marginBottom: '20px' }}>
              <button onClick={handleIncrease} style={{ marginRight: '10px', fontSize: '20px', color: '#ff6600', transition: 'all 0.3s ease-out' }}>+</button>
              <button onClick={handleDecrease} style={{ fontSize: '20px', color: '#ff6600', transition: 'all 0.3s ease-out' }}>-</button>
          </div>
          <label style={{ fontSize: '20px', color: '#ff6600', transition: 'all 0.3s ease-out' }}>
              Drag bottles to rearrange?
              <input type='checkbox' onChange={(event) => setIsDraggable(event.target.checked)} style={{ marginLeft: '10px', transition: 'all 0.3s ease-out' }}/>
          </label>
          <button 
            style={{
                padding: '10px 20px',
                fontSize: '20px',
                color: 'white',
                background: '#ff6600',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease-out',
                marginTop:'10px'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.background = '#ff8533'}
            onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ff6600'}
            onClick={() => setPlaying(true)}
        >
            Start
        </button>
      </Modal>
  );
}

export default BottlesMenu;