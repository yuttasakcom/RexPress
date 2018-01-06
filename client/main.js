import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import 'font-awesome/scss/font-awesome.scss'
import 'bootstrap/scss/bootstrap.scss'
import './styles/styles.scss'

import reducers from './reducers'

import thunk from 'redux-thunk'

import { renderRoutes } from 'react-router-config'

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
