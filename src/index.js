import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import './index.css'

import App from './App'
import reducer from './reducer'

import io from 'socket.io-client'

const socket = io.connect('http://192.168.1.177:8090')
import remoteActionMiddleware from './remote_action_middleware'

const reducerWithStorage = storage.reducer(reducer)
import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('quizzical-state');
const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(middleware, remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducerWithStorage);


socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

socket.on('action', action => {
  console.log('Socket action', action)
  store.dispatch(action)
})

const load = storage.createLoader(engine);
load(store);

load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
