import {
  ROVER_CLEAR,
  ROVER_NEW_MOVE,
  ROVER_SET_POSITION,
} from '../actions/actionTypes';

import { ROVER_DIRECTION } from '../common/constants';

import { getRoverMovementFromCode } from '../common/helpers';
import { getNewRoverState } from './helpers/roverHelpers';

const defaultState = {
  current: null,
  direction: ROVER_DIRECTION.N,
  log: [],
};

const rover = (state = defaultState, action) => {
  switch (action.type) {
    case ROVER_CLEAR:
      return defaultState;

    case ROVER_NEW_MOVE: {
      const { code, grid, obstaclesCoordinates } = action.payload;
      const roverMovement = getRoverMovementFromCode(code);
      const { current, direction } = state;

      return getNewRoverState({
        current,
        direction,
        grid,
        obstaclesCoordinates,
        roverMovement,
        state,
      });
    }

    case ROVER_SET_POSITION: {
      const { position } = action.payload;
      const log = state.current
        ? [...state.log, state.current, position]
        : [...state.log];

      return {
        ...state,
        current: position,
        log,
      };
    }

    default:
      return state;
  }
};

export default rover;
