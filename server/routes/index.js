import renderer from '../helpers/renderer'
import createStore from '../helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from '../../client/routes'

const router = app => {
  app.get('*', (req, res) => {
    const store = createStore()

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {
      res.send(renderer(req, store))
    })
  })
}

export default router
