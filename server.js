const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.redirect('/web/home')
})

app.get('/web/home', (req, res) => {
  res.render('web')
})

app.get('*', (req, res) => {
  res.status(404).render('404')
})

app.all('*', (req, res) => {
  res.sendStatus(200)
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port ' + (process.env.PORT || 8080))
})