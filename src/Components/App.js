import React from 'react';
import { Provider } from 'react-redux';
import Demo from './ConnectedDemo';
import createStore from '../Redux/store';

const store = createStore(window.REDUX_STATE || {});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    )
  }
}

export default App;
