const mongoose = require("mongoose");
const index = require('./index.js');

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost:27017/glossary');

const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const GlossaryModel = mongoose.model('Glossary', glossarySchema);

var get = function(callback) {
  GlossaryModel.find({}, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
}

var create = function(data, callback) {
  GlossaryModel.create(data, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  })
}

var deleteEntry = function(_id, callback) {
  GlossaryModel.deleteOne({ _id: _id }, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  })
}

var patch = function(_id, word, definition, callback) {
  GlossaryModel.findByIdAndUpdate(_id, { word: word, definition: definition }, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  })
}

module.exports.get = get;
module.exports.create = create;
module.exports.deleteEntry = deleteEntry;
module.exports.patch = patch;