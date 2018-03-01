import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import Demo from '../src/Components/ConnectedDemo';

const path = require("path");
const fs = require("fs");
export default (store) => (req, res) => {

  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    const html = ReactDOMServer.renderToString(<Provider store={store}><Demo /></Provider>);
    const reduxState = JSON.stringify(store.getState());

    return res.send(
      htmlData
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
        .replace('/*__SERVER_REDUX_STATE__*/undefined', reduxState)
    );
  });
}
