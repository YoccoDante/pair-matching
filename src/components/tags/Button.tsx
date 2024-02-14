import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
}

const StyledButton = styled.button<ButtonProps>`
  /* Default styles */
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;

  /* Customizable styles */
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.color || 'black'};
  /* Add more styles as needed */
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;