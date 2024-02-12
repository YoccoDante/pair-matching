import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type: 1 | 2 | 3;
  children: ReactNode;
}

const StyledTitle = styled.p<TitleProps>`
  font-weight: 100;
  font-style: normal;
  color: #a1a1a1;

  // Change font size based on type
  font-size: ${props => {
    switch (props.type) {
      case 1:
        return '8rem';
      case 2:
      case 3:
        return '4rem'; // Change this to the desired font size for type 2 and 3
      default:
        return '1rem';
    }
  }};
`;

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;