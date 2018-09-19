import React, { Component } from 'react'
import List from './components/list'
import gpl from 'graphql-tag'
// import {graphql} from 'graphql'
import {Query} from 'react-apollo'
import { connect } from 'react-redux'
// import {graphql} from 'react-apollo'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    console.log(this.props)
    // console.log(this.props)
    // const {data} = this.props
    // console.log(data)
    // if (this.props.data.loading) return <div>...cargando</div>
    // if (this.props.data.error) return <div>Error</div>
    return (
      // <List data={data.profesores} />
      <Query query={queryProfesores}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const linksToRender = data.profesores
          return (
            <List data={linksToRender} />
          )
        }}
      </Query>
    )
  }
}
const queryProfesores = gpl`
query profesores{
  profesores{
    nombre
    nacionalidad
    genero
  }
}
`
const mapStateToProps = (state) => ({
  result: state.result
})
// se le puede psar como sefundo parametro a graphql un obketo con options para el pollingInterval para consultas con intervalos de tiempo
export default connect(mapStateToProps)(App)
// connect(mapStateToProps, mapDispatchToProps)(EditarRest)
// export default graphql(queryProfesores)(App)
