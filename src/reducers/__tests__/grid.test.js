import { ROVER_CLEAR } from '../../actions/actionTypes';

import reducer from '../grid';

describe('Reducer src/reducers/grid.js: ', () => {
  const defaultState = { x: 50, y: 25 };

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
  });
});
