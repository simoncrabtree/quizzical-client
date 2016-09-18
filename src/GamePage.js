import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
 return {
   currentQuestion: state.currentQuestion
 }
}

function mapDispatchToProps() {
  return {}
}

const GamePage = ({currentQuestion}) => (
  <div>
    <h1>Game</h1>
    <div>{currentQuestion.question}</div>
    <form onSubmit={sendAnswer}>
      <input onChange={userTypedAnswerChar} />
    </form>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
