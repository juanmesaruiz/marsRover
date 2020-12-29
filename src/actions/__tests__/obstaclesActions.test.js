import { ROVER_DELETE_OBSTACLE, ROVER_SET_OBSTACLES } from '../actionTypes';

import { createObstacles, deleteObstacle } from '../obstaclesActions';

describe('Actions src/actions/obstaclesActions.js', () => {
  it('createObstacles', () => {
    const obstacles = 'obstacles';
    const expected = { type: ROVER_SET_OBSTACLES, payload: { obstacles } };
    const actual = createObstacles(obstacles);

    expect(actual).toEqual(expected);
  });

  it('deleteObstacle', () => {
    const obstacle = 'obstacle';
    const expected = { type: ROVER_DELETE_OBSTACLE, payload: { obstacle } };
    const actual = deleteObstacle(obstacle);

    expect(actual).toEqual(expected);
  });
});
