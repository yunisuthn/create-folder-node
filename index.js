const http = require('http');
   
const path = require("path");
const fs = require('fs');

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var cors= require('cors')
app.use(cors())

var dir_home = process.env[process.platform =="win32"?"USERPROFILE":"HOME"];

console.log("di_home == ", dir_home);

// var redacted_files_directory = require("path").join(dir_home, "Desktop","Redacted"); //variable pour le dossier a vider a chaque fois que le programme commence a traiter un dossier selectionné
// extra_fs.emptyDirSync(redacted_files_directory);

fs.mkdirSync(path.join(dir_home,"Desktop", "Geeks"));

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