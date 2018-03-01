import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Table } from 'react-bootstrap'

class Basket extends Component {
  render () {
    if (!this.props.items.length) {
      return null
    }

    return <Panel>
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
          <th/>
        </tr>
        </thead>
        <tbody>
        {this.props.items.map(item => <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{Math.round(item.price * item.quantity * 100) / 100}</td>
          <td>
            <Button bsStyle="danger" bsSize="xs" onClick={() => this.props.onRemove(item.name)}>usuń</Button>
          </td>
        </tr>)}
        </tbody>
      </Table>
    </Panel>

  }
}

Basket.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Basket;
