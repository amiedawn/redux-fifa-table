import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { postsReducer } from './reducer';
import thunk from 'redux-thunk';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


