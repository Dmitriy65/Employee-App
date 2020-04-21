import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

import './index.css';

import createStore from "./store.js";
const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
