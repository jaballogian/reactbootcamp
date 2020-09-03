import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // default react App module
// change this to import own react module
import App from './Module 4 - React Context/Course 6  - Challenge Context Practice 2/Index'
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
