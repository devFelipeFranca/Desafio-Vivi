import * as ActionTypes from '../common/actionTypes';
import initialProducts from '../mock/productsDataBase.json'

const INITIAL_STATE = {
  category:'',
  query:'',
  products: initialProducts,
  cartProduct: [],
}

export default function state(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_QUERY:
      return {...state, query: action.payload}
    case ActionTypes.UPDADE_CATEGORY:
      return {...state, category: action.payload}
    case ActionTypes.UPDADE_PRODUCTS:
      return {...state, products: action.payload}
    case ActionTypes.CART_ADD_PRODUCT:
      return {...state, cartProduct: [ ...state.cartProduct, action.payload ]}
    case ActionTypes.CLEAR_PRODUCT_CART:
      return {...state, cartProductC: action.payload}
    default:
      return {...state}
  }
}