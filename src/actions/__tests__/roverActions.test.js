import {
  ROVER_CLEAR,
  ROVER_CLEAR_POSITION_LOG,
  ROVER_NEW_INSTRUCTIONS,
  ROVER_NEW_MOVE,
  ROVER_SET_POSITION,
} from '../actionTypes';

import {
  roverClear,
  roverClearPositionLog,
  roverSetPosition,
  roverNewKeyboardMove,
  roverNewInstructionsMove,
} from '../roverActions';

describe('Actions src/actions/obstaclesActions.js', () => {
  it('roverClear', () => {
    const expected = { type: ROVER_CLEAR };
    const actual = roverClear();

    expect(actual).toEqual(expected);
  });

  it('roverClearPositionLog', () => {
    const expected = { type: ROVER_CLEAR_POSITION_LOG };
    const actual = roverClearPositionLog();

    expect(actual).toEqual(expected);
  });

  it('roverNewInstructionsMove', () => {
    const instructions = 'instructions';
    const grid = 'grid';
    const obstaclesCoordinates = 'obstaclesCoordinates';
    const expected = {
      type: ROVER_NEW_INSTRUCTIONS,
      payload: { instructions, grid, obstaclesCoordinates },
    };
    const actual = roverNewInstructionsMove({
      instructions,
      grid,
      obstaclesCoordinates,
    });

    expect(actual).toEqual(expected);
  });

  it('roverNewKeyboardMove', () => {
    const code = 'code';
    const grid = 'grid';
    const obstaclesCoordinates = 'obstaclesCoordinates';
    const expected = {
      type: ROVER_NEW_MOVE,
      payload: { code, grid, obstaclesCoordinates },
    };
    const actual = roverNewKeyboardMove({ code, grid, obstaclesCoordinates });

    expect(actual).toEqual(expected);
  });

  it('roverSetPosition', () => {
    const position = 'position';
    const expected = { type: ROVER_SET_POSITION, payload: { position } };
    const actual = roverSetPosition(position);

    expect(actual).toEqual(expected);
  });
});
