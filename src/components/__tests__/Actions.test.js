import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { mockComponent } from '../../common/testHelpers';

import Actions from '../Actions';

jest.mock('../InstructionsForm', () => props =>
  mockComponent('InstructionsForm', props)
);
jest.mock('../RandomObstacleButton', () => props =>
  mockComponent('RandomObstacleButton', props)
);
jest.mock('../LogObstacles', () => props =>
  mockComponent('LogObstacles', props)
);

describe('Actions test suite', () => {
  const component = <Actions />;

  const setup = () => render(component);

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
