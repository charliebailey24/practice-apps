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
app.use(express.json());

app.get('/api/get', function(req, res) {
  console.log('get requet logging server side');
  console.log('db:::', db);
  // call db
  db.get(function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('docs in app.get:::', response);
      res.send(response);
    }
  });

  app.post('/api/post', function(req, res) {
    console.log('axios req.body:::', req.body);
    var data = req.body;
    db.create(data, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('docs in app.post:::', response);
        res.send(response);
      }
    })
  })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
