import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reducers from '../reducers/historyReducers'
// import { routerReducer, routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
// import { autoRehydrate, persistStore } from 'redux-persist'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import createEncryptor from 'redux-persist-transform-encrypt'

// const encryptor = createEncryptor({
//   secretKey: 'lallavesupersecretadeencryptacion'
// })
// export const history = createHistory({forceRefresh: true})

// const historyMiddleware = routerMiddleware(history)
// const reducers = combineReducers({
//   rootReducer,
//   form: formReducer,
//   router: routerReducer
// })

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  reducers
)
// persistStore(store, { whitelist: ['session'], transforms: [encryptor] }, () => {
//   store.dispatch(pageLoaded())
// }
// )
