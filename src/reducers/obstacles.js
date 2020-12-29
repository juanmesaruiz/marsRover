import {
  ROVER_CLEAR,
  ROVER_DELETE_OBSTACLE,
  ROVER_SET_OBSTACLES,
} from '../actions/actionTypes';

const defaultState = [];

const grid = (state = defaultState, action) => {
  switch (action.type) {
    case ROVER_CLEAR:
      return defaultState;

    case ROVER_DELETE_OBSTACLE: {
      const { obstacle } = action.payload;

      const newState = [...state];
      const obstacleIndex = newState.findIndex(
        ({ x, y }) => x === obstacle.x && y === obstacle.y
      );

      newState.splice(obstacleIndex, 1);

      return newState;
    }

    case ROVER_SET_OBSTACLES: {
      const { obstacles } = action.payload;
      return [...state, ...obstacles];
    }

    default:
      return state;
  }
};

export default grid;
