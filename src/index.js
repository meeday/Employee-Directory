// react, react-dom, styling and the app component which holds all the other components imported
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// reactDOM renders the app component and attaches it to the html element with id 'root' in the html file within the public directory
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// service-worker was created automatically when i created the react app. It is not being utilised for this app 