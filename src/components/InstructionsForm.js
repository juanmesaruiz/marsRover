import React, { useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { roverNewInstructionsMove } from '../actions/roverActions';
import { getGrid, getObstacles } from '../reducers';

import Input from './library/Input';
import { getValidInstructions } from '../common/helpers';

const InstructionsForm = ({
  className,
  roverNewInstructionsMove,
  grid,
  obstaclesCoordinates,
}) => {
  const inputRef = useRef(null);
  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      const inputValue = event?.target?.instructions?.value;
      const instructions = getValidInstructions(inputValue);

      inputRef.current.value = instructions;
      roverNewInstructionsMove({
        grid,
        instructions,
        obstaclesCoordinates,
      });
    },
    [grid, obstaclesCoordinates, roverNewInstructionsMove]
  );

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <div>
        <label className="label" htmlFor="instructions">
          Rover Instructions:
        </label>
        <Input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Type Rover instructions"
          ref={inputRef}
        />
      </div>
      <p>
        <Input type="reset" value="Reset" />
        <Input className="instructions-send" type="submit" value="Send" />
      </p>
    </form>
  );
};

const StyledInstructionsForm = styled(InstructionsForm)`
  .label {
    display: block;
    margin: 0 0 5px;
  }

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
