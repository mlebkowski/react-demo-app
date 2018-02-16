import 'isomorphic-fetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Products from './Products';

class App extends Component {

  state = {
    products: null,
  }

  componentDidMount() {
      fetch(this.props.url)
        .then(result => result.json())
        .then(json => this.setState({
          products: json.items.map(item => item.fields)
        }));
  }

  onAdd = name => this.setState(prevState => ({
    products: prevState.products.map(item => item.name === name ? { ...item, quantity: (item.quantity || 0) +1 } : item)
  }))

  onDelete = name => this.setState(prevState => ({
    products: prevState.products.map(item => item.name === name ? { ...item, quantity: 0 } : item)
  }))

  render() {
    return (
      <Grid fluid={false}>
        <Row>
          <Col sm={12}>
            <Products products={this.state.products} onAdd={this.onAdd} onDelete={this.onDelete}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired,
}

export default App;
