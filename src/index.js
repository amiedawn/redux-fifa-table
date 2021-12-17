import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { counterReducer } from './reducer';
import App from './App';

const myLogger = (store) => {
  return next => {
    return action => {
      console.log("middleware ran");
    };
  };
};

const store = createStore(counterReducer, applyMiddleware(myLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


