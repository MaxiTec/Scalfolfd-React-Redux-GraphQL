import React, {Component} from 'react'
import { connect } from 'react-redux'
// import * as loginActions from './actions/historyActions'
class Historial extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <React.Fragment>
        <h3>Historial:</h3>
        <p>Ultima Suma es: {this.props.result}</p>
        <ul>
          {(this.props.operations !== 0 &&
            this.props.operations.map((el, i) => <li key={i}>{el}</li>)
          )}
        </ul>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  operations: state.calculadora.operations,
  result: state.calculadora.result
})
export default connect(mapStateToProps)(Historial)
