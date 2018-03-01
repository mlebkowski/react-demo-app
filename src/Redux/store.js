import { createStore } from 'redux';
import reducer from '../Redux/reducers'

export default function factory(initialState) {
  return createStore(reducer, initialState)
}
