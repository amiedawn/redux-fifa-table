import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import postReducer from "./reducer";
import thunk from "redux-thunk";
import autoLogger from "./autoLogger";

const enhancer = compose(applyMiddleware(thunk), autoLogger());
const store = createStore(postReducer, composeWithDevTools(enhancer));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
