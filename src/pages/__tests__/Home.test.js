import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import {
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
} from '../../actions/roverActions';
import { createObstacles } from '../../actions/obstaclesActions';
import { getGrid, getObstacles } from '../../reducers';

import { mockComponent } from '../../common/testHelpers';
import { KEYBOARDS_CODES } from '../../common/constants';

import store from '../../store/__mocks__/mockStore';

import Home from '../Home';

jest.mock('../../actions/roverActions');
jest.mock('../../actions/obstaclesActions');
jest.mock('../../reducers/index');

jest.mock('../../components/Actions', () => props =>
  mockComponent('Actions', props)
);
jest.mock('../../components/Description', () => props =>
  mockComponent('Description', props)
);
jest.mock('../../components/Grid', () => props => mockComponent('Grid', props));
jest.mock('../../components/LogPosition', () => props =>
  mockComponent('LogPosition', props)
);
jest.mock('../../components/Title', () => props =>
  mockComponent('Title', props)
);

const mockCoordinates = [
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];
const mockGrid = { x: 50, y: 75 };
const mockObstaclesCoordinates = [{ x: 1, y: 1 }];
const mockRoverPosition = { x: 5, y: 5 };

jest.mock('../../common/helpers', () => ({
  ...jest.requireActual('../../common/helpers'),
  getRandomCoordinates: () => mockCoordinates,
  getRandomRoverPosition: () => mockRoverPosition,
}));

describe('Home test suite', () => {
  const component = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    roverClear.mockReturnValue({
      type: 'homeClear',
    });
    roverNewKeyboardMove.mockReturnValue({
      type: 'roverNewKeyboardMove',
    });
    roverSetPosition.mockReturnValue({
      type: 'roverSetPosition',
    });
    createObstacles.mockReturnValue({
      type: 'createObstacles',
    });
    getGrid.mockReturnValue(mockGrid);
    getObstacles.mockReturnValue(mockObstaclesCoordinates);
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

  it('Should create obstacles and set rover position', () => {
    setup();
    expect(createObstacles).toHaveBeenCalledTimes(1);
    expect(createObstacles).toHaveBeenCalledWith(mockCoordinates);
    expect(roverSetPosition).toHaveBeenCalledTimes(1);
    expect(roverSetPosition).toHaveBeenCalledWith(mockRoverPosition);
  });

  it('Should fire new keyboardMove on press A', () => {
    const { getByLabelText } = setup();
    fireEvent.keyDown(getByLabelText('Grid'), { key: 'A', code: 'KeyA' });
    expect(roverNewKeyboardMove).toHaveBeenCalledTimes(1);
    expect(roverNewKeyboardMove).toHaveBeenCalledWith({
      code: KEYBOARDS_CODES.A,
      grid: mockGrid,
      obstaclesCoordinates: mockObstaclesCoordinates,
    });
  });

  it('Should fire new keyboardMove on press D', () => {
    const { getByLabelText } = setup();
    fireEvent.keyDown(getByLabelText('Grid'), { key: 'D', code: 'KeyD' });
    expect(roverNewKeyboardMove).toHaveBeenCalledTimes(1);
    expect(roverNewKeyboardMove).toHaveBeenCalledWith({
      code: KEYBOARDS_CODES.D,
      grid: mockGrid,
      obstaclesCoordinates: mockObstaclesCoordinates,
    });
  });

  it('Should fire new keyboardMove on press W', () => {
    const { getByLabelText } = setup();
    fireEvent.keyDown(getByLabelText('Grid'), { key: 'W', code: 'KeyW' });
    expect(roverNewKeyboardMove).toHaveBeenCalledTimes(1);
    expect(roverNewKeyboardMove).toHaveBeenCalledWith({
      code: KEYBOARDS_CODES.W,
      grid: mockGrid,
      obstaclesCoordinates: mockObstaclesCoordinates,
    });
  });

  it('Should not fire new keyboardMove on press S', () => {
    const { getByLabelText } = setup();
    fireEvent.keyDown(getByLabelText('Grid'), { key: 'S', code: 'KeyS' });
    expect(roverNewKeyboardMove).toHaveBeenCalledTimes(0);
  });

  it('Should clear data when unmounting the component', () => {
    const { unmount } = setup();
    unmount();
    expect(roverClear).toHaveBeenCalledTimes(1);
  });
});
