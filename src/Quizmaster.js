import React from 'react'
import { connect } from 'react-redux'
import {askQuestion} from './actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    askQuestion: (e) => {
      e.preventDefault()
      dispatch(askQuestion())
    }
  }
}

const Quizmaster = ({askQuestion}) => (
  <div>
    <h1>Quizmaster</h1>
    <button onClick={askQuestion}>Ask Question</button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Quizmaster)