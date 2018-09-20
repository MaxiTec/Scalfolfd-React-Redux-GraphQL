import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../actions/historyActions'
import Historial from '../components/Historial'
class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = { }
    console.log('esoty en Calculadora')
    console.log(props)
  }
  handleSubmit (e) {
    e.preventDefault()
    let numberOne = Number(this.refs.numUno.value)
    let numberTwo = Number(this.refs.numDos.value)
    let res = `El Resultado es: ${numberOne + numberTwo}`
    this.props.actions.calculate(numberOne + numberTwo)
    this.props.actions.register(res)
  }
  render () {
    return (
      <div>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <input type='number' placeholder='escribe algo' ref='numUno' />
          <input type='number' placeholder='escribe algo' ref='numDos' />
          <input type='submit' />
        </form>
        {/* Como puedes observar los dos componentes accedes al mismo estado y no son Hermanos Independientes */}
        Initial State: {this.props.result}
        <Historial />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  // Bind Actions Creators junta las funciones que llaman a los reducers y los dejan disponibles
  // como props dentro del componente
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}
const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    result: state.calculadora.result
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
