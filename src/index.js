import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'

import App from './App'
import reducer from './reducer'
import {login} from './actions'

let store = createStore(reducer, {isLoggedIn: false})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(login("Thanks For The Lend"))
