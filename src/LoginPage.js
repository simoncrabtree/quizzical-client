import React from 'react'
import { connect } from 'react-redux'
import {login, userTypedTeamNameChar} from './actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    userTypedTeamNameChar: (e) => {
      dispatch(userTypedTeamNameChar(e.target.value))
    },
    login: (e) => {
      e.preventDefault()
      dispatch(login())
    }
  }
}

const LoginPage = ({userTypedTeamNameChar, login}) => (
  <div>
    <h1>Welcome - please choose a Team Name</h1>
    <form onSubmit={login}>
      <input onChange={userTypedTeamNameChar} />
    </form>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
