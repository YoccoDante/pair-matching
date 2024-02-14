import React from 'react';
import styled, { keyframes } from 'styled-components';

const bgScrolling = keyframes`
  0% { background-position: 50px 50px; }
`;

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #999;
  font: 400 16px/1.5 'Exo', 'Ubuntu', 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
  animation: ${bgScrolling} .92s infinite;
  animation-timing-function: linear;
  z-index: -5;
`;

const GameBackGround = () => {
  return <StyledDiv />;
};

export default GameBackGround;