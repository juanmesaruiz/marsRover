import { ROVER_DELETE_OBSTACLE, ROVER_SET_OBSTACLES } from './actionTypes';

export const createObstacles = obstacles => ({
  type: ROVER_SET_OBSTACLES,
  payload: {
    obstacles,
  },
});

export const deleteObstacle = obstacle => ({
  type: ROVER_DELETE_OBSTACLE,
  payload: {
    obstacle,
  },
});
