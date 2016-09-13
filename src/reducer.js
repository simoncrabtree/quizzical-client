import {LOG_IN, USER_TYPED_TEAMNAME_CHAR, SET_STATE, ASK_QUESTION} from './actions'

module.exports = (state, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      }
    case USER_TYPED_TEAMNAME_CHAR:
      return {
        ...state,
        teamName: action.teamName
      }
    case SET_STATE:
      console.log(action)
      return {
        ...state,
        serverState: action.state
      }

    case ASK_QUESTION:
      console.log(action)
      return state
    default:
      return state
  }
}