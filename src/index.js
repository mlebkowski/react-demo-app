import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const root = document.getElementById('root')

if (root.firstElementChild) {
  ReactDOM.hydrate(<App />, root);
} else {
  ReactDOM.render(<App />, root);
}
