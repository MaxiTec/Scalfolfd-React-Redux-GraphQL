import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {ConnectedRouter} from 'react-router-redux'
import {ApolloProvider} from 'react-apollo'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// todas estas librerias se encuentras agrupadas y otras mas en apollo-boost
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {store, persistor, history} from './conf/confStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
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
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
, document.getElementById('root'))
registerServiceWorker()
