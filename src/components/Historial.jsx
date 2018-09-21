import React, {Component} from 'react'
import { connect } from 'react-redux'
// import * as loginActions from './actions/historyActions'
class Historial extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    // let {onClick} = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        <h3>Historial del {this.props.user.token}:</h3>
        <p>Ultima Suma es: {this.props.result}</p>
        <div>
          <button>Ver todos</button>
          <button>Ver Eliminados</button>
        </div>
        <ul>
          {(this.props.operations !== 0 &&
            this.props.operations.map((el, i) => <li onClick={() => this.props.completedItem(el.id)} key={i} style={(el.completed)}>{el.text}</li>)
          )}
        </ul>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  operations: state.calculadora.operations,
  result: state.calculadora.result,
  user: state.login.user
})
// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }
export default connect(mapStateToProps)(Historial)
