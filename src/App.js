import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Header from './Header'
import LoginPage from './LoginPage'
import GamePage from './GamePage'
import Quizmaster from './Quizmaster'

const mapStateToProps = (state) => {
  if(!state)
    return {isLoggedIn: false}
  
  return {
    isLoggedIn: state.isLoggedIn || false,
    teamName: state.teamName
  }
}

const App = ({isLoggedIn, isQuizmaster, teamName}) => (
  <div>
    <Header isLoggedIn={isLoggedIn} teamName={teamName}/>
    {!isLoggedIn ? (<LoginPage />) : teamName === "quizmaster" ? (<Quizmaster/>) : (<GamePage />)}
    
  </div>
)

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App)