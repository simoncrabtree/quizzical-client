import {LOG_IN} from './actions'

module.exports = (state, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        teamName: action.teamName
      }
    default:
      return state
  }
}