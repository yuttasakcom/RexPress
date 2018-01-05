import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../client/pages/Home'
import Login from '../../client/pages/Login'

const Router = () => (
  <div>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
  </div>
)

export default Router
