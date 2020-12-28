import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const configureStore = () => {
  const initialState = {};
  const enhancers = [];
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension({ name: '- ROVER MARS -' }));
  }

  const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

  const store = createStore(reducers, initialState, composedEnhancers);

  return { store };
};

export default configureStore;
