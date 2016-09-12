import {LOG_IN, USER_TYPED_TEAMNAME_CHAR, SET_STATE} from './actions'

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
    default:
      return state
  }
}