import * as actionTypes from '../actions/actionTypes'
import { REHYDRATE } from 'redux-persist'
const initialState = {
  isLogged: false,
  loading: true
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FAILED:
      console.log(action)
    // Se crea una copia del estado y se le agregan todos lo que necesitemos
      return {...state, isLogged: false, loading: false, error: action.payload}
    case actionTypes.LOGIN_SUCCESS:
      console.log(action)
      return {...state, isLogged: true, loading: false, user: action.payload}
    case actionTypes.LOGOUT:
      return {...state, isLogged: false, loading: false, user: null}
    case actionTypes.PAGE_LOADED:
      return { ...state, loading: false }
    case REHYDRATE:
      return state
    default:
      return state
  }
}
