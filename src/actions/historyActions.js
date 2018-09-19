// Guardamos todos los action Types en una variable  y accedemos a ellas como un objeto
import * as actionTypes from './actionTypes'
// los actions son las funciones que mandan a llamar a los reducers
// creamos una funcion que podamos pasar parametros que reciban los reducers
// Recibimos el resutado de la suma y actualizamos el estado
export const calculate = (result) => ({
  type: actionTypes.CALCULATE,
  result
})
export const register = (result) => ({
  type: actionTypes.SAVE_OPERATION,
  result
})
// Y luego exportamos la funcion que hace dispatch de la funcion
// export const
