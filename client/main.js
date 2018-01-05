import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import 'font-awesome/scss/font-awesome.scss'
import 'bootstrap/scss/bootstrap.scss'
import './styles/styles.scss'

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
)
