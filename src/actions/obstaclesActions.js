import { ROVER_SET_OBSTACLES } from './actionTypes';

export const createObstacles = obstacles => ({
  type: ROVER_SET_OBSTACLES,
  payload: {
    obstacles,
  },
});
