import * as ActionTypes from '../common/actionTypes';
import initialProducts from '../settings/productsDataBase.json'

const INITIAL_STATE = {
  isActive: "dropdown",
  category:'',
  query:'',
  products: initialProducts,
  cartProduct: [],
}

export default function state(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.DROPDOWN_ACTIVE:
      return {...state, isActive: action.msg}
    case ActionTypes.DROPDOWN_INACTIVE:
      return {...state, isActive: action.msg}
    case ActionTypes.UPDATE_QUERY:
      return {...state, query: action.query}
    case ActionTypes.UPDADE_CATEGORY:
      return {...state, category: action.category}
    case ActionTypes.UPDADE_PRODUCTS:
      return {...state, products: action.products}
    case ActionTypes.CART_ADD_PRODUCT:
      return {...state, CC: [ ...state.CC, action.addOfCC ]}
    case ActionTypes.CART_REM_PRODUCT:
      return {...state, CC: action.rmOfCC}
    default:
      return {...state}
  }
}