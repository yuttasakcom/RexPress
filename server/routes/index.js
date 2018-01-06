import renderer from '../helpers/renderer'
import createStore from '../helpers/createStore'

const router = app => {
  app.get('*', (req, res) => {
    const store = createStore(req)
    res.send(renderer(req, store))
  })
}

export default router
