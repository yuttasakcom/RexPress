import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'

import Header from './components/Header'

const App = ({ route }) => (
  <div>
    <Header />
    <Switch>{renderRoutes(route.routes)}</Switch>
  </div>
)

export default {
  component: App
}
