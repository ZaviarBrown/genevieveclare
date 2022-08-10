import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/index'
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

declare global {
  interface Window { csrfFetch: any; store: any; sessionActions: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
