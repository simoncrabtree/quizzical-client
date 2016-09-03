export const LOG_IN = "LOG_IN"
export const USER_TYPED_TEAMNAME_CHAR = "USER_TYPED_TEAMNAME_CHAR"

export function login() {
  return {type: LOG_IN}
}

export function userTypedTeamNameChar(teamName) {
  return {type: USER_TYPED_TEAMNAME_CHAR,  teamName: teamName}
}