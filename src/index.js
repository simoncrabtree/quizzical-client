import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import './index.css'

import App from './App'
import reducer from './reducer'

import io from 'socket.io-client'

const reducerWithStorage = storage.reducer(reducer)
import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('quizzical-state');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducerWithStorage);

const socket = io.connect('http://127.0.0.1:8090')
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

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
