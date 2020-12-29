import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Input from '../Input';

describe('Input test suite', () => {
  const getComponent = props => <Input {...props} />;

  const setup = props => render(getComponent(props));

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot if Input has type submit', () => {
    const { container } = setup({ type: 'submit' });
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot if Input has type reset', () => {
    const { container } = setup({ type: 'reset' });
    expect(container).toMatchSnapshot();
  });
});
