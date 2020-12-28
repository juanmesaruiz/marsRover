import { ROVER_CLEAR, ROVER_SET_GRID } from '../actions/actionTypes';

const defaultState = { x: 50, y: 25 };

const grid = (state = defaultState, action) => {
  switch (action.type) {
    case ROVER_CLEAR:
      return defaultState;

    case ROVER_SET_GRID: {
      const { grid } = action.payload;
      return grid;
    }

    default:
      return state;
  }
};

export default grid;
