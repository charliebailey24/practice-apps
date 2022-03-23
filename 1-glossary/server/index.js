require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 * Other routes here....
*/

app.get('/api/get', function(req, res) {
  console.log('get requet logging server side');
  // call db

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
