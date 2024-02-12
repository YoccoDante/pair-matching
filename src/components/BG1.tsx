import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const move = keyframes`
  0% {
    background-position: 
      calc( .9*var(--s)) calc( .9*var(--s)),
      calc(-.1*var(--s)) calc(-.1*var(--s)),
      calc( .7*var(--s)) calc( .7*var(--s)),
      calc(-.3*var(--s)) calc(-.3*var(--s)),0 0;
  }
  25% {
    background-position: 
      calc(1.9*var(--s)) calc( .9*var(--s)),
      calc(-1.1*var(--s)) calc(-.1*var(--s)),
      calc(1.7*var(--s)) calc( .7*var(--s)),
      calc(-1.3*var(--s)) calc(-.3*var(--s)),0 0;
  }
  50% {
    background-position: 
      calc(1.9*var(--s)) calc(-.1*var(--s)),
      calc(-1.1*var(--s)) calc( .9*var(--s)),
      calc(1.7*var(--s)) calc(-.3*var(--s)),
      calc(-1.3*var(--s)) calc( .7*var(--s)),0 0;
  }
  75% {
    background-position: 
      calc(2.9*var(--s)) calc(-.1*var(--s)),
      calc(-2.1*var(--s)) calc( .9*var(--s)),
      calc(2.7*var(--s)) calc(-.3*var(--s)),
      calc(-2.3*var(--s)) calc( .7*var(--s)),0 0;
  }
  100% {
    background-position: 
      calc(2.9*var(--s)) calc(-1.1*var(--s)),
      calc(-2.1*var(--s)) calc(1.9*var(--s)),
      calc(2.7*var(--s)) calc(-1.3*var(--s)),
      calc(-2.3*var(--s)) calc(1.7*var(--s)),0 0;
  }
`;

const Background = styled.div`
  --s: 100px;
  --c1: #C3CCAF;
  --c2: #67434F;
  --_s: calc(2*var(--s)) calc(2*var(--s));
  --_g: var(--_s) conic-gradient(at 40% 40%,#0000 75%,var(--c1) 0);
  --_p: var(--_s) conic-gradient(at 20% 20%,#0000 75%,var(--c2) 0);
  background:
    calc( .9*var(--s)) calc( .9*var(--s))/var(--_p),
    calc(-.1*var(--s)) calc(-.1*var(--s))/var(--_p),
    calc( .7*var(--s)) calc( .7*var(--s))/var(--_g),
    calc(-.3*var(--s)) calc(-.3*var(--s))/var(--_g),
    conic-gradient(from 90deg at 20% 20%,var(--c2) 25%,var(--c1) 0) 
     0 0/var(--s) var(--s);
  animation: ${move} 3s infinite;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:-5;
`;

const BG1 = () => {
  return <Background />;
};

export default BG1;