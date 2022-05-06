const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('mais ou et donc car ni or');
})

app.listen(80)