import React from 'react'

const Header = ({isLoggedIn, teamName}) => (
  <div>
    {isLoggedIn ? (
      <h1>{teamName}</h1>
    ) : (
      <h1>Quizzical</h1>
    )}
  </div>
)

export default Header