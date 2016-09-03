import {LOG_IN, USER_TYPED_TEAMNAME_CHAR} from './actions'

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
    default:
      return state
  }
}