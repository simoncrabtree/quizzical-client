export const LOG_IN = "LOG_IN"
export const USER_TYPED_TEAMNAME_CHAR = "USER_TYPED_TEAMNAME_CHAR"
export const SET_STATE = "SET_STATE"
export const ASK_QUESTION = "ASK_QUESTION"

export function login() {
  return {type: LOG_IN}
}

export function userTypedTeamNameChar(teamName) {
  return {type: USER_TYPED_TEAMNAME_CHAR,  teamName: teamName}
}

export function askQuestion() {
  return {type: ASK_QUESTION}
}