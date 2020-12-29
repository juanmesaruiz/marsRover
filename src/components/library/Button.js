import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

const StyledButton = styled(Button)`
  cursor: pointer;
`;

export default StyledButton;
