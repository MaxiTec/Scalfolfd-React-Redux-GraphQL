import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import historyReducer from './reducers/historyReducers'
import loginReducer from './reducers/loginReducers'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo'
import {Provider} from 'react-redux'
import { persistStore } from 'redux-persist'
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist'
import { ConnectedRouter } from 'react-router-redux'
import storage from 'redux-persist/lib/storage'
// todas estas librerias se encuentras agrupadas y otras mas en apollo-boost
import ApolloClient from 'apollo-client'
import { createStore, compose, applyMiddleware } from 'redux'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// aca se le pasan al Create Store todos los reducers se pueden combinar con CombineReducers
// const reducers = combineReducers({
//   login: loginReducer,
//   calculadora: historyReducer
// })
const config = {
  key: 'primary',
  storage
}
let reducer = persistCombineReducers(config, {
  login: loginReducer,
  calculadora: historyReducer
})
const store = createStore(reducer,
  compose(applyMiddleware(thunk)
))
persistStore(store)
// console.log(store.getState())
const httpLink = createHttpLink({
  uri: 'http://localhost:5678/graphql'
})
// indicamos que todas ls peticiones vendran desde Api
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>

, document.getElementById('root'))
registerServiceWorker()
