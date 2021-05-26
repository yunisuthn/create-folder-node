const express = require('express')
const bodyParser = require('body-parser')

app = express()



app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello')
})


var port = process.env.PORT || 8081;
app.listen(port);