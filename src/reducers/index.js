import { combineReducers } from 'redux';

import grid from './grid';
import obstacles from './obstacles';
import rover from './rover';

const reducers = {
  grid,
  obstacles,
  rover,
};

export const getGrid = state => state.grid;
export const getObstacles = state => state.obstacles;
export const getRover = state => state.rover;

export default combineReducers(reducers);
