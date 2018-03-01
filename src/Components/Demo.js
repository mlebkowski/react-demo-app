import 'isomorphic-fetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Products from './Products';
import Basket from './Basket'
import ApiClient from '../Services/ApiClient'

class Demo extends Component {

  componentDidMount() {
    if (!this.props.products) {
      console.log('Fetching on the client');
      ApiClient().then(data => this.props.onProductsLoaded(data));
    }
  }

  render() {
    return (
      <Grid fluid={false}>
        <Row>
          <Col sm={12}>
            <Products products={this.props.products} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
            <Basket items={(this.props.products || []).filter(item => item.quantity > 0)} onRemove={this.props.onRemove}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Demo.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onProductsLoaded: PropTypes.func.isRequired,
}

export default Demo;
