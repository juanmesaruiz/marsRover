import React from 'react';
import styled from 'styled-components';

const Input = props => <input {...props} />;

const getStylesBasedOnType = type => {
  switch (type) {
    case 'submit':
    case 'reset':
      return 'cursor: pointer;';
    default:
      return '';
  }
};

const StyledInput = styled(Input)`
  ${({ type }) => getStylesBasedOnType(type)}
`;

export default StyledInput;
