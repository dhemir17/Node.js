const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('hello form back-end to front-end');
})
 
app.listen(3004);