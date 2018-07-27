// imports for application
const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

// set port number
const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

// serve all static files from the assets folder
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/assets/`)));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/index.html`));
});

// create a server and setup socket io app
const server = http.createServer(app);

// start listening to server
server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
});

