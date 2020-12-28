import { ROVER_CLEAR, ROVER_NEW_MOVE, ROVER_SET_POSITION } from './actionTypes';

export const roverClear = () => ({
  type: ROVER_CLEAR,
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
