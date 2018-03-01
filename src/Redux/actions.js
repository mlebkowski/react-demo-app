export const ACTION_BASKET = 'ADD_PRODUCT_TO_BASKET';

export const ACTION_PRODUCTS = 'ADD_PRODUCTS';

export function changeProductQuantity(product, quantity) {
  return {
    type: ACTION_BASKET,
    payload: {
      product: product,
      quantity: parseInt(quantity, 10) || 0,
    }
  }
}

export function addProducts(productList) {
  return {
    type: ACTION_PRODUCTS,
    payload: productList,
  }
}
