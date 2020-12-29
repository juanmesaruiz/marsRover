import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Title from '../Title';

describe('Title test suite', () => {
  const component = <Title />;

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
