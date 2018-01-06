import React, { Component } from 'react'
import App from '../App'

import Home from '../../client/pages/Home'
import Login from '../../client/pages/Login'
import About from '../../client/pages/About'
import Service from '../../client/pages/Service'
import Contact from '../../client/pages/Contact'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...Login,
        path: '/login'
      },
      {
        ...About,
        path: '/about'
      },
      {
        ...Service,
        path: '/service'
      },
      {
        ...Contact,
        path: '/contact'
      }
    ]
  }
]
