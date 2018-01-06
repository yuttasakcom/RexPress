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

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
