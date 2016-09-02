export const LOG_IN = "LOG_IN"

export function login(teamName) {
  return {type: LOG_IN, teamName: teamName}
}