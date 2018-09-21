import React, {Component} from 'react'
import * as loginActions from '../actions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(props.session)
  }
  handleSubmit (e) {
    e.preventDefault()
    let userName = this.refs.user.value
    let password = this.refs.pass.value
    this.props.actions.login(userName, password)
    console.log(this.props)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='user' />
        {(this.props.error &&
          <span>Hay algun error</span>
          )}
        <input type='text' ref='pass' />
        <input type='submit' />
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  const session = {session: state.login}
  return {
    session
  }
}
const mapDispacthToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispacthToProps)(Login)
