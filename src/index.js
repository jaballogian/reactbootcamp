import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // default react App module
// change this to import own react module
import App from './Module 8 - Redux/Course 11 - Plain JS Redux - Handling more complex state/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
