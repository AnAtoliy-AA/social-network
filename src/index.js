import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

let posts = [
  { id: 1, message: 'hi', likesCount: 4 },
  { id: 2, message: 'hi how are you', likesCount: 6 },
];

let dialogs = [
  { id: 1, name: 'SASHA' },
  { id: 2, name: 'MASHA' },
  { id: 3, name: 'PASHA' },
  { id: 4, name: 'KASHA' },
  { id: 5, name: 'PROSTOKVASHA' },
];

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'by' },
  { id: 3, message: 'fdf' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
