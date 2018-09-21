import * as actionsTypes from './actionTypes'
import {push} from 'react-router-redux'
import {API_URL} from '../conf/conf'
// Login
// voy a recibir un objeto con los datos
// asincrono
export const login = (user, password) => {
  const data = {
    email: 'peter@klaven',
    password: 'cityslicka'
  }
  function handleErrors (response) {
    if (!response.ok) {
      console.log(response)
      throw Error(response.statusText)
    }
    return response
  }
  return (dispatch) => {
    fetch(API_URL + 'register', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(handleErrors)
    // .then(res => res.json())
    .then(res => res.json())
    .then(response => {
      console.log('Success:', response)
      dispatch(successLogin(response))
      dispatch(push('/home'))
    })
    .catch(error => { console.log(error) })

      // .then(function (response) {
      //   if (response.error) {
      //     throw new Error(response.error)
      //   } else {
      //     console.log(response)
      //     // dispatch(successLogin(response.json))
      //     // dispatch(push('/home'))
      //     // return response.json()
      //   }
      // })
      // .then(function (myJson) {
      //   console.log(myJson)
      // })
  // aca va la logica de Login
  }
}

// export const successLogin=(user)=>({
//   type:actionsTypes.LOGIN,
//   payload:user
// })
export const successLogin = (user) => {
  return {
    type: actionsTypes.LOGIN_SUCCESS,
    payload: user
  }
}
export const failedLogin = (error) => {
  return {
    type: actionsTypes.LOGIN_FAILED,
    payload: error
  }
}
export const logout = () => {
  return {
    type: actionsTypes.LOGOUT
  }
}
