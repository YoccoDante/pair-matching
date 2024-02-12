import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { LevelModel } from '../models/level';
import Stars from './Stars';
import LockIcon from './icons/LockIcon';
import GameIcon from './GameIcon';

interface LevelProps {
  level: LevelModel;
  onClick:() => void;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

interface LevelContainerProps {
  isLocked:boolean
}

const LevelContainer = styled.div<LevelContainerProps>`
  width: 150px;
  height: 150px;
  background-color: ${props => props.isLocked ? '#996699' : '#D8BFD8'}; // Darken the color when isLocked is true
  border: 2px solid #800080;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-family: 'ABeeZee', sans-serif;
  font-weight: 500;
  font-size: 26px;
  position: relative;

  &:hover {
    animation: ${pulse} 2s infinite;
  }
`;

const Level: React.FC<LevelProps> = ({ level, onClick}) => {
  return (
    <LevelContainer isLocked={level.isLocked} onClick={level.isLocked? () => {}: onClick}>
      <p style={{margin:0, padding:0}}>Level</p>
      <p style={{margin:0, padding:0}}>{level.levelLabel}</p>
      <p style={{display:level.isLocked? 'none':'auto', margin:0, padding:0, position:'absolute', bottom:'-35px'}}>
        <Stars numStars={level.stars}/>
      </p>
      <div style={{display:level.isLocked? 'auto':'none',position:'absolute'}}>
        <GameIcon type='lock' width='100px' height='100px'/>
      </div>
    </LevelContainer>
  );
};

export default Level;