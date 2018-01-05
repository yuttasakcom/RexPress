import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../../client/pages/Home'
import Login from '../../client/pages/Login'
import About from '../../client/pages/About'

const Router = () => (
  <div>
    <Header />
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
  </div>
)

export default Router
