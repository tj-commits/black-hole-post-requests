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

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port ' + (process.env.PORT || 8080))
})