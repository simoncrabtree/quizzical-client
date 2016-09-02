import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Header from './Header'
import LoginPage from './LoginPage'
import GamePage from './GamePage'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    teamName: state.teamName
  }
}

const App = ({isLoggedIn}) => (
  <div>
    <Header />
    {!isLoggedIn ? (
      <LoginPage />
    ) : (
      <GamePage />
    )}
    
  </div>
)

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App)