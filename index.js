const http = require('http');

const extra_fs = require('fs-extra');
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;
var dir_home = process.env[process.platform =="win32"?"USERPROFILE":"HOME"];

var redacted_files_directory = require("path").join(dir_home, "Desktop","Redacted"); //variable pour le dossier a vider a chaque fois que le programme commence a traiter un dossier selectionné
console.log("dir_home == ", redacted_files_directory);

// extra_fs.emptyDirSync(redacted_files_directory);

const server = http.createServer((req, res) => {
    

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});