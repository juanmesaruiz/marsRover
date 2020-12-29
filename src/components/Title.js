import React from 'react';
import styled from 'styled-components';

const Title = ({ className }) => (
  <h1 className={className}>Mars Rover Mission</h1>
);

const StyledTitle = styled(Title)`
  margin: 0 0 30px;
`;

export default StyledTitle;
