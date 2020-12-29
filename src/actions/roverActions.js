import {
  ROVER_CLEAR,
  ROVER_CLEAR_POSITION_LOG,
  ROVER_NEW_INSTRUCTIONS,
  ROVER_NEW_MOVE,
  ROVER_SET_POSITION,
} from './actionTypes';

export const roverClear = () => ({
  type: ROVER_CLEAR,
});

export const roverClearPositionLog = () => ({
  type: ROVER_CLEAR_POSITION_LOG,
});

export const roverSetPosition = position => ({
  type: ROVER_SET_POSITION,
  payload: {
    position,
  },
});

export const roverNewKeyboardMove = ({ code, grid, obstaclesCoordinates }) => ({
  type: ROVER_NEW_MOVE,
  payload: {
    code,
    grid,
    obstaclesCoordinates,
  },
});

export const roverNewInstructionsMove = ({
  instructions,
  grid,
  obstaclesCoordinates,
}) => ({
  type: ROVER_NEW_INSTRUCTIONS,
  payload: {
    instructions,
    grid,
    obstaclesCoordinates,
  },
});
