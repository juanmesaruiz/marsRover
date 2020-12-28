import { ROVER_DIRECTION, ROVER_MOVEMENT } from '../../common/constants';
import { isCorrectMovement } from '../../common/helpers';

const getStateCheckingMovement = ({
  grid,
  obstaclesCoordinates,
  newDirection,
  newPosition,
  state,
}) => {
  if (isCorrectMovement({ grid, obstaclesCoordinates, newPosition })) {
    return {
      current: newPosition,
      direction: newDirection,
      log: [...state.log, state.current],
    };
  }
  return state;
};

export const getNewRoverState = ({
  current,
  direction,
  grid,
  obstaclesCoordinates,
  roverMovement,
  state,
}) => {
  const newPosition = { ...current };
  switch (roverMovement) {
    case ROVER_MOVEMENT.F: {
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newPosition.y = newPosition.y + 1;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection: direction,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.S: {
          newPosition.y = newPosition.y - 1;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection: direction,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.W: {
          newPosition.x = newPosition.x - 1;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection: direction,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.E: {
          newPosition.x = newPosition.x + 1;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection: direction,
            newPosition,
            state,
          });
        }
        default:
          return state;
      }
    }
    case ROVER_MOVEMENT.L:
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newPosition.x = newPosition.x - 1;
          const newDirection = ROVER_DIRECTION.W;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.S: {
          newPosition.x = newPosition.x + 1;
          const newDirection = ROVER_DIRECTION.E;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.W: {
          newPosition.y = newPosition.y - 1;
          const newDirection = ROVER_DIRECTION.S;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.E: {
          newPosition.y = newPosition.y + 1;
          const newDirection = ROVER_DIRECTION.N;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        default:
          return state;
      }
    case ROVER_MOVEMENT.R:
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newPosition.x = newPosition.x + 1;
          const newDirection = ROVER_DIRECTION.E;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.S: {
          newPosition.x = newPosition.x - 1;
          const newDirection = ROVER_DIRECTION.W;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.W: {
          newPosition.y = newPosition.y + 1;
          const newDirection = ROVER_DIRECTION.N;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        case ROVER_DIRECTION.E: {
          newPosition.y = newPosition.y - 1;
          const newDirection = ROVER_DIRECTION.S;
          return getStateCheckingMovement({
            grid,
            obstaclesCoordinates,
            newDirection,
            newPosition,
            state,
          });
        }
        default:
          return state;
      }
    default:
      return state;
  }
};
