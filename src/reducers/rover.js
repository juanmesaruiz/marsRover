import {
  ROVER_CLEAR,
  ROVER_CLEAR_POSITION_LOG,
  ROVER_NEW_INSTRUCTIONS,
  ROVER_NEW_MOVE,
  ROVER_SET_POSITION,
} from '../actions/actionTypes';

import { ROVER_DIRECTION, ROVER_MOVEMENT } from '../common/constants';

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

    case ROVER_CLEAR_POSITION_LOG:
      return { ...state, log: [] };

    case ROVER_NEW_INSTRUCTIONS: {
      const { instructions, grid, obstaclesCoordinates } = action.payload;
      const instructionsArray = [...instructions];
      let newState = { ...state };

      instructionsArray.forEach(instruction => {
        const roverMovement = ROVER_MOVEMENT[instruction.toUpperCase()];
        const { current, direction } = newState;
        if (roverMovement) {
          newState = getNewRoverState({
            current,
            direction,
            grid,
            obstaclesCoordinates,
            roverMovement,
            state: newState,
          });
        }
      });
      return newState;
    }

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
