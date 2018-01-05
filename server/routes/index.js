import renderer from '../helpers/renderer'

const router = app => {
  app.get('*', (req, res) => {
    res.send(renderer(req))
  })
}

export default router
