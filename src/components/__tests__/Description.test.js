import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Description from '../Description';

describe('Description test suite', () => {
  const component = <Description />;

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
