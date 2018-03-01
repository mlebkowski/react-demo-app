import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Well, Image, Button } from 'react-bootstrap';

class Item extends Component {
  renderButton() {
    if (this.props.quantity) {
      return <div>
        <Button bsStyle="danger" bsSize="small" onClick={() => this.props.onRemove(this.props.name)}>usuń</Button>
        <Button bsStyle="default" bsSize="small" onClick={() => this.props.onAdd(this.props.name)}>Dodaj więcej</Button>
      </div>

    }

    return <Button bsStyle="primary" bsSize="small" onClick={() => this.props.onAdd(this.props.name)}>
      Do koszyka
    </Button>
  }
  render() {
    return (
      <Well bsSize="small">
        <h2>{this.props.name}</h2>
        <Image src={this.props.photoUrl} thumbnail />
        {this.props.inStock
          ? this.renderButton()
          : <span>Produkt niedostępny</span>
        }
      </Well>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Item;
