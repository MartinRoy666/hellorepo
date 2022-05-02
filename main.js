const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('salut comment ca va les amis de Mart ???');
})

app.listen(80)