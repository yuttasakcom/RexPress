import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/scss/bootstrap.scss'
import './styles/styles.scss'

import Home from './pages/Home'

ReactDOM.hydrate(<Home />, document.getElementById('root'))
