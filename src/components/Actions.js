import React from 'react';
import styled from 'styled-components';

import InstructionsForm from './InstructionsForm';
import RandomObstacleButton from './RandomObstacleButton';
import LogObstacles from './LogObstacles';

const Actions = ({ className }) => (
  <div className={className}>
    <InstructionsForm />
    <RandomObstacleButton />
    <LogObstacles />
  </div>
);

const styledActions = styled(Actions)`
  display: inline-block;
  height: 376px;
  overflow: hidden;
  border: 1px solid black;
  margin-left: 15px;
  padding: 20px 20px;
  width: 200px;
`;

export default styledActions;
