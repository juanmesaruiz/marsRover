import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { getGrid, getObstacles, getRover } from '../../reducers';

import Grid from '../Grid';

import store from '../../store/__mocks__/mockStore';
import state from '../../store/__mocks__/mockState';

jest.mock('../../reducers');

describe('Grid test suite', () => {
  const component = (
    <Provider store={store}>
      <Grid />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    getGrid.mockReturnValue(state.grid);
    getObstacles.mockReturnValue(state.obstacles);
    getRover.mockReturnValue(state.rover);
  });

  afterEach(jest.clearAllMocks);

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
