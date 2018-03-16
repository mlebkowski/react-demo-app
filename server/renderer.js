import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import Demo from '../src/Components/ConnectedDemo';

const path = require("path");
const fs = require("fs");

let html, reduxState, rendered;

export default (store) => (req, res) => {
  if(rendered) {
   return res.send(rendered);
  }
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    html = html || ReactDOMServer.renderToString(<Provider store={store}><Demo /></Provider>);
    reduxState = reduxState || JSON.stringify(store.getState());

    return res.send(
      rendered = htmlData
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
        .replace('window.REDUX_STATE=void 0', `window.REDUX_STATE=${reduxState}`)
    );
  });
}
