import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { deleteObstacle } from '../../actions/obstaclesActions';
import { getObstacles } from '../../reducers';

import LogObstacles from '../LogObstacles';

import store from '../../store/__mocks__/mockStore';
import state from '../../store/__mocks__/mockState';

jest.mock('../../actions/obstaclesActions');
jest.mock('../../reducers');

describe('LogObstacles test suite', () => {
  const component = (
    <Provider store={store}>
      <LogObstacles />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    deleteObstacle.mockReturnValue({
      type: 'deleteObstacle',
    });
    getObstacles.mockReturnValue(state.obstacles);
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

  it('Should fire deleteObstacle action', () => {
    const { getAllByText } = setup();
    fireEvent.click(getAllByText('Delete')[0]);

    expect(deleteObstacle).toHaveBeenCalledTimes(1);
  });
});
