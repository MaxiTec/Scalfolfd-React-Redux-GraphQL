// Guardamos todos los action Types en una variable  y accedemos a ellas como un objeto
import * as actionTypes from './actionTypes'

// los actions son las funciones que mandan a llamar a los reducers
// creamos una funcion que podamos pasar parametros que reciban los reducers

/*
Las funciones reciben dos parametros el primer es el type que se le pasa al reducer
para identificar que accion es
* El segundo parametro es el parametro que tiene el nuevo estado
se puede pasar como una propiedad del onbeto
*/
let nextTodoId = 0
// Puedo usar variables que se usen dentro de cada funcion
export const calculate = (result) => ({
  type: actionTypes.CALCULATE,
  result
})
export const register = (result) => ({
  type: actionTypes.SAVE_OPERATION,
  // payload puede llamarse como sea
  id: nextTodoId++,
  payload: result
})
export const _delete = (id) => ({
  type: actionTypes.DELETE_OPERATION,
  payload: id
})
export const completed = (id) => ({
  type: actionTypes.COMPLETED_OPERATION,
  payload: id
})
// Y luego exportamos la funcion que hace dispatch de la funcion
// export const
