import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';

import reportWebVitals from './reportWebVitals';

import AppState from './context/AppState';
import AppRoutes from './routes';

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <AppRoutes />
    </AppState>
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Debugging 
debugContextDevtool(container)