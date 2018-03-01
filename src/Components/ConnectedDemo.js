import { connect } from 'react-redux';
import Demo from './Demo';
import { changeProductQuantity, addProducts } from '../Redux/actions';


const mapStateToProps = (state, ownProps) => ({
  products: state.products && state.products.map(product => ({ ...product, quantity: state.basket[product.name] || 0 }))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: product => dispatch(changeProductQuantity(product, +1)),
  onRemove: product => dispatch(changeProductQuantity(product, -1)),
  onProductsLoaded: productList => dispatch(addProducts(productList))
})


export default connect(mapStateToProps, mapDispatchToProps)(Demo);
