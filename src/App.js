import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Route, Switch } from 'react-router-dom'
// import List from './components/list'
import gpl from 'graphql-tag'
// import {graphql} from 'graphql'
// import {Query} from 'react-apollo'
import { connect } from 'react-redux'
// juntamos los actions
// importamos las funciones que queremos agregar al componente como props
// import {graphql} from 'react-apollo'
// import logo from './logo.svg'
import './App.css'
// importamos Containers
import Login from './containers/Login'
import Calculator from './containers/Calculator'
const MatchWhenAuthorized = ({ component: Component, ...rest, auth }) => (
  <Route {...rest} render={renderProps => (
    auth ? (
      <Component />
    ) : (
      <Redirect to={{
        pathname: '/login'
      }} />
      )
  )} />
)
class App extends Component {
  constructor (props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
    console.log(`${props}`)
  }
  renderLoader () {
    return (
      <div className='loader-spiner'>
        <p>Cargando...</p>
      </div>
    )
  }
  renderRoutes () {
    return (
      <div>
        <Route exact path='/' render={() => (
          this.props.isLogged ? (
            <Redirect push to='/home' />
          ) : (
            <Login />
            )
        )} />
        <Route exact path='/login' component={Login} />
        <MatchWhenAuthorized exact auth={this.props.isLogged} path='/home' component={Calculator} />
      </div>
    )
  }
  render () {
    console.log(this.props)
    // console.log(this.props)
    // const {data} = this.props
    // console.log(data)
    // if (this.props.data.loading) return <div>...cargando</div>
    // if (this.props.data.error) return <div>Error</div>
      // <List data={data.profesores} />
      // <Query query={queryProfesores}>
      //   {({ loading, error, data }) => {
      //     if (loading) return <div>Fetching</div>
      //     if (error) return <div>Error</div>
      //     const linksToRender = data.profesores
      //     return (
      //       <List data={linksToRender} />
      //     )
      //   }}
      // </Query>
    // if (this.props.loading) {
    //   return this.renderLoader()
    // } else {
    return this.renderRoutes()
    // }
  }
}
// const queryProfesores = gpl`
// query profesores{
//   profesores{
//     nombre
//     nacionalidad
//     genero
//   }
// }
// `
const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  loading: state.login.loading
})

// se le puede psar como sefundo parametro a graphql un objeto con options para el pollingInterval para consultas con intervalos de tiempo
export default connect(mapStateToProps)(App)
// connect(mapStateToProps, mapDispatchToProps)(EditarRest)
// export default graphql(queryProfesores)(App)
