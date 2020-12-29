import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { roverNewInstructionsMove } from '../actions/roverActions';
import { getGrid, getObstacles } from '../reducers';

import Input from './library/Input';

const InstructionsForm = ({
  className,
  roverNewInstructionsMove,
  grid,
  obstaclesCoordinates,
}) => {
  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      roverNewInstructionsMove({
        grid,
        instructions: event?.target?.instructions?.value,
        obstaclesCoordinates,
      });
    },
    [grid, obstaclesCoordinates, roverNewInstructionsMove]
  );

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="instructions">Rover Instructions:</label>
        <Input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Type Rover instructions"
        />
      </p>
      <p>
        <Input type="reset" value="Reset" />
        <Input className="instructions-send" type="submit" value="Send" />
      </p>
    </form>
  );
};

const StyledInstructionsForm = styled(InstructionsForm)`
  .instructions-send {
    margin-left: 15px;
  }
`;

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  roverNewInstructionsMove,
})(StyledInstructionsForm);
