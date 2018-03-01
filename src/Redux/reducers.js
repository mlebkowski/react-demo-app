import { combineReducers } from 'redux';
import { ACTION_PRODUCTS, ACTION_BASKET } from './actions';

function products(state = null, action) {
  if (action.type !== ACTION_PRODUCTS) {
    return state;
  }

  return action.payload;
}

function basket(state = {}, action) {
  if (action.type !== ACTION_BASKET) {
    return state;
  }

  return {
    ...state,
    [action.payload.product]: (state[action.payload.product] || 0) + action.payload.quantity
  }
}

export default combineReducers({
  products,
  basket,
});
