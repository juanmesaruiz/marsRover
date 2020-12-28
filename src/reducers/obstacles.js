import { ROVER_CLEAR, ROVER_SET_OBSTACLES } from '../actions/actionTypes';

const defaultState = [];

const grid = (state = defaultState, action) => {
  switch (action.type) {
    case ROVER_CLEAR:
      return defaultState;

    case ROVER_SET_OBSTACLES: {
      const { obstacles } = action.payload;
      return [...state, ...obstacles];
    }

    default:
      return state;
  }
};

export default grid;
