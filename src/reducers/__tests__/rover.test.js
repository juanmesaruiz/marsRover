import {
  ROVER_CLEAR,
  ROVER_CLEAR_POSITION_LOG,
  ROVER_NEW_INSTRUCTIONS,
  ROVER_NEW_MOVE,
  ROVER_SET_POSITION,
} from '../../actions/actionTypes';

import { KEYBOARDS_CODES, ROVER_DIRECTION } from '../../common/constants';

import reducer from '../rover';

describe('Reducer src/reducers/rover.js: ', () => {
  const defaultState = {
    current: null,
    direction: ROVER_DIRECTION.N,
    log: [],
  };

  it('Default', () => {
    const action = {};
    const initialState = undefined;

    expect(reducer(initialState, action)).toEqual(defaultState);
  });

  describe('Actions:', () => {
    it('ROVER_CLEAR', () => {
      const action = { type: ROVER_CLEAR };
      const initialState = undefined;

      expect(reducer(initialState, action)).toEqual(defaultState);
    });

    it('ROVER_CLEAR_POSITION_LOG', () => {
      const action = { type: ROVER_CLEAR_POSITION_LOG };
      const initialState = { ...defaultState, log: [{ x: 1, y: 1 }] };

      expect(reducer(initialState, action)).toEqual(defaultState);
    });

    describe('ROVER_NEW_INSTRUCTIONS', () => {
      it('should move 3 times', () => {
        const instructions = 'FfF';
        const grid = { x: 50, y: 25 };
        const obstaclesCoordinates = [];
        const position = { x: 0, y: 0 };
        const expectedPosition = { x: 0, y: 3 };
        const action = {
          type: ROVER_NEW_INSTRUCTIONS,
          payload: { instructions, grid, obstaclesCoordinates },
        };
        const initialState = { ...defaultState, current: position };
        const expectedState = {
          ...defaultState,
          current: expectedPosition,
          log: [{ x: 0, y: 2 }, { x: 0, y: 1 }, position],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
      });

      it('should move only one time cause an obstacle', () => {
        const instructions = 'FfF';
        const grid = { x: 50, y: 25 };
        const obstaclesCoordinates = [{ x: 0, y: 2 }];
        const position = { x: 0, y: 0 };
        const expectedPosition = { x: 0, y: 1 };
        const action = {
          type: ROVER_NEW_INSTRUCTIONS,
          payload: { instructions, grid, obstaclesCoordinates },
        };
        const initialState = { ...defaultState, current: position };
        const expectedState = {
          ...defaultState,
          current: expectedPosition,
          log: ['Obstacle - X 0, Y 2', 'Obstacle - X 0, Y 2', position],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
      });

      it('should stay on the same position because instructions are wrong', () => {
        const instructions = 'abc';
        const grid = { x: 50, y: 25 };
        const obstaclesCoordinates = [{ x: 0, y: 2 }];
        const position = { x: 0, y: 0 };
        const action = {
          type: ROVER_NEW_INSTRUCTIONS,
          payload: { instructions, grid, obstaclesCoordinates },
        };
        const initialState = { ...defaultState, current: position };

        expect(reducer(initialState, action)).toEqual(initialState);
      });
    });

    describe('ROVER_NEW_MOVE', () => {
      it('should send new position', () => {
        const code = KEYBOARDS_CODES.W;
        const grid = { x: 50, y: 25 };
        const obstaclesCoordinates = [];
        const position = { x: 0, y: 0 };
        const expectedPosition = { x: 0, y: 1 };
        const action = {
          type: ROVER_NEW_MOVE,
          payload: { code, grid, obstaclesCoordinates },
        };
        const initialState = { ...defaultState, current: position };
        const expectedState = {
          ...defaultState,
          current: expectedPosition,
          log: [position],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
      });

      it('should stay on the same position cause of an obstacle', () => {
        const code = KEYBOARDS_CODES.W;
        const grid = { x: 50, y: 25 };
        const obstaclesCoordinates = [{ x: 0, y: 1 }];
        const position = { x: 0, y: 0 };
        const action = {
          type: ROVER_NEW_MOVE,
          payload: { code, grid, obstaclesCoordinates },
        };
        const initialState = { ...defaultState, current: position };
        const expectedState = {
          ...initialState,
          log: ['Obstacle - X 0, Y 1'],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
      });
    });

    describe('ROVER_SET_POSITION', () => {
      it('first move', () => {
        const position = { x: 2, y: 2 };
        const action = { type: ROVER_SET_POSITION, payload: { position } };
        const expectedState = { ...defaultState, current: position };

        expect(reducer(defaultState, action)).toEqual(expectedState);
      });

      it('second move', () => {
        const current = { x: 1, y: 1 };
        const log = [{ x: 0, y: 0 }];
        const position = { x: 2, y: 2 };
        const action = { type: ROVER_SET_POSITION, payload: { position } };
        const initialState = { ...defaultState, current, log };
        const expectedState = {
          ...defaultState,
          current: position,
          log: [...log, current, position],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
      });
    });
  });
});
