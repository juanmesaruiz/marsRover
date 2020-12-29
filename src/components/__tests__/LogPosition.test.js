import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { roverClearPositionLog } from '../../actions/roverActions';
import { getRover } from '../../reducers';

import LogPosition from '../LogPosition';

import store from '../../store/__mocks__/mockStore';
import state from '../../store/__mocks__/mockState';

jest.mock('../../actions/roverActions');
jest.mock('../../reducers');

describe('LogPosition test suite', () => {
  const component = (
    <Provider store={store}>
      <LogPosition />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    roverClearPositionLog.mockReturnValue({
      type: 'roverClearPositionLog',
    });
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

  it('Should fire roverClearPositionLog action', () => {
    const { getByText } = setup();
    fireEvent.click(getByText('Clear Log'));

    expect(roverClearPositionLog).toHaveBeenCalledTimes(1);
  });
});
