import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../../client/pages/Home'
import Login from '../../client/pages/Login'
import About from '../../client/pages/About'
import Service from '../../client/pages/Service'
import Contact from '../../client/pages/Contact'

const Router = () => (
  <div>
    <Header />
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/service" component={Service} />
    <Route path="/contact" component={Contact} />
  </div>
)

export default Router
