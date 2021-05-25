import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import createSageMiddleware from "redux-saga";

import rootSaga from "./sagas/index";

const sagaMiddleWare = createSageMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

export const history = createBrowserHistory({ forceRefresh: true });

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
