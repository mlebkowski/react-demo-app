import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, Table } from 'react-bootstrap'

class Basket extends Component {
  render () {
    if (!this.props.items.length) {
      return null
    }

    return <Fragment>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Koszyk</Panel.Title>
      </Panel.Heading>
      <Table striped bordered>
        <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena jedn</th>
          <th>Razem</th>
        </tr>
        </thead>
        <tbody>
        {this.props.items.map(item => <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{Math.round(item.price * item.quantity * 100) / 100}</td>
        </tr>)}
        </tbody>
      </Table>
    </Fragment>

  }
}

Basket.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Basket;
