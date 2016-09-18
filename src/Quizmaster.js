import React from 'react'
import { connect } from 'react-redux'
import {askQuestion} from './actions'

const mapStateToProps = (state) => {
  if(state.quiz)
  return {
    quizmasterDisplayQuestion: state.quiz.rounds[state.currentRound].questions[state.currentQuestion].question
  }

  return {
    quizmasterDisplayQuestion: 'DUMMY QUESTION'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    askQuestion: (e) => {
      e.preventDefault()
      dispatch(askQuestion())
    }
  }
}

const Quizmaster = ({askQuestion, quizmasterDisplayQuestion}) => (
  <div>
    <h1>Quizmaster</h1>
    <div>{quizmasterDisplayQuestion}</div>
    <button onClick={askQuestion}>Ask Question</button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Quizmaster)