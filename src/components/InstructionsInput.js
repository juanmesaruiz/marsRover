import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { roverNewInstructionsMove } from '../actions/roverActions';
import { getGrid, getObstacles } from '../reducers';

import Input from './library/Input';

const InstructionsInput = ({
  roverNewInstructionsMove,
  grid,
  obstaclesCoordinates,
}) => {
  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      roverNewInstructionsMove({
        grid,
        instructions: event.target.instructions.value,
        obstaclesCoordinates,
      });
    },
    [grid, obstaclesCoordinates, roverNewInstructionsMove]
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Rover Instructions:
        <Input
          type="text"
          name="instructions"
          placeholder="Type Rover instructions"
        />
      </label>
      <Input type="submit" value="Send" />
      <Input type="reset" value="Reset" />
    </form>
  );
};

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  roverNewInstructionsMove,
})(InstructionsInput);
