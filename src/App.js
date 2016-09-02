import { connect } from 'react-redux'
import GamePage from './GamePage'

const mapStateToProps = (state) => {
  return {
    teamName: state.teamName
  }
}

const App = connect(mapStateToProps)(GamePage)

export default App