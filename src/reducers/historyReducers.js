import * as types from '../actions/actionTypes'
export default (state = {result: 0, operations: []}, action) => {
  switch (action.type) {
    case types.SAVE_OPERATION:
      console.log(action)
      return {...state, operations: state.operations.concat(action.payload)}
    case types.CALCULATE:
      return {...state, result: action.result}
    default:
      return state
  }
}
