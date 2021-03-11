import * as ActionTypes from '../common/actionTypes';

export const updateQuery = (value) => ({
  type: ActionTypes.UPDATE_QUERY,
  payload: value,
})

export const updateProducts = (value) => ({
  type: ActionTypes.UPDADE_PRODUCTS,
  payload: value,
})

export const updateCategory = (value) => ({
  type: ActionTypes.UPDADE_CATEGORY,
  payload: value,
})

export const addProductsToCart = (value) => ({
  type: ActionTypes.CART_ADD_PRODUCT,
  payload: value,
})
