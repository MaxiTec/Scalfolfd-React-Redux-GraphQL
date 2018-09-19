import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import historyReducer from './reducers/historyReducers'
import {ApolloProvider} from 'react-apollo'
import {Provider} from 'react-redux'
// todas estas librerias se encuentras agrupadas y otras mas en apollo-boost
import ApolloClient from 'apollo-client'
import { createStore } from 'redux'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
const store = createStore(historyReducer)
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
      <App />
    </Provider>
  </ApolloProvider>

, document.getElementById('root'))
registerServiceWorker()
