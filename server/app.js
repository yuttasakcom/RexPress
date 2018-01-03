// modules
import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import Home from '../client/pages/Home'

// create app
const app = express()

// app config
app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))

// routes
app.get('*', (req, res) => {
  res.send(
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Rexpress</title>
        </head>
        <body>
            <div id="root">${renderToString(<Home />)}</div>
            <script src="bundle.js"></script>
        </body>
        </html>
    `
  )
})

// app listen
app.listen(app.get('port'), () => {
  console.log(`Server running at localhost:${app.get('port')}`)
  console.log('Press CTRL-C to stop')
})
