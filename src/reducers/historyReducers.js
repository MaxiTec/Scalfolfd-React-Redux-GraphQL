import * as types from '../actions/actionTypes'
// import { completed } from '../actions/historyActions'
export default (state = {result: 0, operations: []}, action) => {
  switch (action.type) {
    case types.SAVE_OPERATION:
      console.log(action)
      return {...state, operations: state.operations.concat([...state, {id: action.id, text: action.payload, completed: false}])}
    // case types.SAVE_OPERATION:
    //   console.log(action)
    //   return {...state, operations: state.operations.concat(action.payload)}
    case types.CALCULATE:
      return {...state, result: action.result}
    case types.DELETE_OPERATION:
      console.log(action)
      return {...state, operations: state.operations.filter((ele, id) => action.payload !== id)}
    case types.COMPLETED_OPERATION:
      console.log(action)
      // puedo iterar sobre los estados anteriores
      return {...state, operations: state.operations.map((ele) => { return (ele.id === action.payload) ? {...ele, completed: !ele.completed} : {...ele} })}
    default:
      return state
  }
}
