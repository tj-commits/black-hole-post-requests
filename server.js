const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('*', (req, res) => {
  res.redirect(301, 'http://blackhole.rf.gd')
})

app.post('*', (req, res) => {
  res.sendStatus(200)
})

app.delete('*', (req, res) => {
  res.sendStatus(200)
})

app.put('*', (req, res) => {
  res.sendStatus(200)
})

app.checkout('*', (req, res) => {
  res.sendStatus(200)
})

app.copy('*', (req, res) => {
  res.sendStatus(200)
})

app.head('*', (req, res) => {
  res.sendStatus(200)
})

app.lock('*', (req, res) => {
  res.sendStatus(200)
})

app.merge('*', (req, res) => {
  res.sendStatus(200)
})

app.mkactivity('*', (req, res) => {
  res.sendStatus(200)
})

app.mkcol('*', (req, res) => {
  res.sendStatus(200)
})

app.move('*', (req, res) => {
  res.sendStatus(200)
})

app.notify('*', (req, res) => {
  res.sendStatus(200)
})

app['m-search']('*', (req, res) => {
  res.sendStatus(200)
})

app.options('*', (req, res) => {
  res.sendStatus(200)
})

app.patch('*', (req, res) => {
  res.sendStatus(200)
})

app.purge('*', (req, res) => {
  res.sendStatus(200)
})

app.report('*', (req, res) => {
  res.sendStatus(200)
})

app.search('*', (req, res) => {
  res.sendStatus(200)
})

app.subscribe('*', (req, res) => {
  res.sendStatus(200)
})

app.trace('*', (req, res) => {
  res.sendStatus(200)
})

app.unlock('*', (req, res) => {
  res.sendStatus(200)
})

app.unsubscribe('*', (req, res) => {
  res.sendStatus(200)
})


app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port ' + (process.env.PORT || 8080))
})