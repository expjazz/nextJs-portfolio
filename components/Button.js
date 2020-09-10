import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  a {
  }
`;
const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
