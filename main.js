const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello les amis de Mart !!!!! !');
})

app.listen(80)