import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import {createStore,applyMiddleware} from 'redux';

const store = createStore(rootReducer,applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
