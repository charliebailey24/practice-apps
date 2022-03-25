require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// Other routes here
app.use(express.json());

app.get('/api/get', function(req, res) {
  db.get(function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });

  app.post('/api/post', function(req, res) {
    var data = req.body;
    db.create(data, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    })
  });

  app.delete('/api/delete', (req, res) => {
    var { _id } = req.body;
    db.deleteEntry(_id, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    })
  });

  app.patch('/api/patch', (req, res) => {
    var { _id, word, definition } = req.body.data;
    db.patch(_id, word, definition, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    })
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
