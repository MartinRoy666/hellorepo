const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('salut comment ca va LE MONDE ?');
})

app.listen(80)