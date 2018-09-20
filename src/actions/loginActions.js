import * as actionsTypes from './actionTypes'
// Login
// voy a recibir un objeto con los datos
// asincrono
export const login = (user, password) => {
  return (dispatch) => {
    const userValid = 'MaxTec'
    const passwordValid = '123'
    console.log(user, password)
    if (user) {
      let userInt = user
      let passInt = password
      if (userValid === userInt && passwordValid === passInt) {
        dispatch(successLogin(userValid))
      } else {
        console.log('datos incorrectos')
        dispatch(failedLogin('Mensaje de error del Login'))
      }
    } else {
      console.log('no paso datos')
    }
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
