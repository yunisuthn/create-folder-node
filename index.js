const path = require("path");

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var cors= require('cors')
app.use(cors())

//Body Parser     mongodb+srv://ony:<password>@cluster0-lwzb3.mongodb.net/test?retryWrites=true&w=majority
var urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.end("bonjour");
  next();
});



var port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));