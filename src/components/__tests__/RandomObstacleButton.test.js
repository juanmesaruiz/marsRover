import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { createObstacles } from '../../actions/obstaclesActions';
import { getGrid, getObstacles, getRover } from '../../reducers';

import RandomObstacleButton from '../RandomObstacleButton';

import state from '../../store/__mocks__/mockState';
import store from '../../store/__mocks__/mockStore';

jest.mock('../../actions/obstaclesActions');
jest.mock('../../reducers');

describe('RandomObstacleButton test suite', () => {
  const component = (
    <Provider store={store}>
      <RandomObstacleButton />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    createObstacles.mockReturnValue({
      type: 'createObstacles',
    });
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

  it('Should fire createObstacles action', () => {
    const { getByText } = setup();
    fireEvent.click(getByText('Add random obstacle'));

    expect(createObstacles).toHaveBeenCalledTimes(1);
  });
});
