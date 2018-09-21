import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { persistStore, persistCombineReducers } from 'redux-persist'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import loginReducer from '../reducers/loginReducers'
import historyReducer from '../reducers/historyReducers'
// el storage donde guardaremos la data
import storage from 'redux-persist/lib/storage'
// todas estas librerias se encuentras agrupadas y otras mas en apollo-boost
import { createStore, compose, applyMiddleware } from 'redux'

export const history = createHistory({forceRefresh: true})

const historyMiddleware = routerMiddleware(history)
// configuracion de Redux-Persist. habilitamos solo la Key del Login
const config = {
  key: 'primary',
  storage,
  whitelist: ['login'], // Solo la Key de login el el objeto persistirá
  blacklist: ['login.error']
}

export const reducer = persistCombineReducers(config, {
  login: loginReducer,
  calculadora: historyReducer,
  router: routerReducer
})
export const store = createStore(reducer, undefined,
  compose(applyMiddleware(historyMiddleware, thunk)
))
const pageLoaded = () => {
  return {type: 'PAGE_LOADED'}
}

export const persistor = persistStore(store, undefined, () => { store.dispatch(pageLoaded()) })
