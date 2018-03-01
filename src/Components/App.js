import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../Redux/reducers'
import Demo from './ConnectedDemo';

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Demo url={this.props.url} />
      </Provider>
    )
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired,
}

export default App;
