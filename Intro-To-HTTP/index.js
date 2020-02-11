// The code above initializes the handlebars engine and sets the layouts directory to views/layouts. This is the directory where your layouts will be stored.

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


app.get('/', (request, response) => {
    response.render('home', {
      name: 'Lisa'
    })
})


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
