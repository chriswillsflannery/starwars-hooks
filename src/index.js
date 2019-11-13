import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import reactime from 'reactime';

const rRoot = ReactDOM.createRoot(document.getElementById('root'));

rRoot.render(<App />);

reactime(rRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
