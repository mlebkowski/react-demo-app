import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, Alert, Row, Col } from 'react-bootstrap'
import Item from './Item'
import Basket from './Basket'

class Products extends Component {
  renderLoading = () => <Col sm={12}><Alert bsStyle="warning">Ładowanie produktów…</Alert></Col>

  render () {
    return <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{this.props.title}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Row>
          {this.props.products ? this.props.products.map(product =>
            <Col md={4} lg={3} key={product.name}>
              <Item {...product} onAdd={this.props.onAdd} onDelete={this.props.onDelete}/>
            </Col>
          ) : this.renderLoading()}
        </Row>
      </Panel.Body>
      <Basket items={(this.props.products || []).filter(item => item.quantity > 0)} />
    </Panel>
  }
}

Products.defaultProps = {
  title: 'Produkty'
}

Products.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Products
