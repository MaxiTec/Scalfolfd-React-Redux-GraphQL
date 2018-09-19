import * as types from '../actions/actionTypes'
export default (state = {result: 0, operations: []}, action) => {
  switch (action.type) {
    case types.SAVE_OPERATION:
      return {...state, operations: state.operations.concat(action.operations)}
    case types.CALCULATE:
      return {...state, result: action.result}
    default:
      return state
  }
}
