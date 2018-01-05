// modules
import express from 'express'
import routes from './routes'

// create app
const app = express()

// app config
app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))

// routes
routes(app)

// app listen
app.listen(app.get('port'), () => {
  console.log(`Server running at localhost:${app.get('port')}`)
  console.log('Press CTRL-C to stop')
})
