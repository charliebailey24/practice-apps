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

let get = function(callback) {
  GlossaryModel.find({}, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
}

let create = function(data, callback) {
  GlossaryModel.create(data, function(err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  })
}

module.exports.get = get;
module.exports.create = create;




// init().catch(err => console.log(err));

// async function init() {
//   let oak = new GlossaryModel({
//     word: 'oak',
//     definition: 'a tree that bears acorns as fruit, and typically has lobed deciduous leaves. Oaks are common in many north temperate forests and are an important source of hard and durable wood used chiefly in construction, furniture, and (formerly) shipbuilding.'
//   });

//   await oak.save(function(err, reponse) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(reponse);
//     }
//   });

//   let allocation = new GlossaryModel({
//     word: 'allocation',
//     definition: 'the action or process of allocating or distributing something.'
//   });

//   await allocation.save(function(err, reponse) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(reponse);
//     }
//   });

//   let automatic = new GlossaryModel({
//     word: 'automatic',
//     definition: '(of a device or process) working by itself with little or no direct human control.'
//   });

//   await automatic.save(function(err, reponse) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(reponse);
//     }
//   });
// }

// main().catch(err => console.log(err));

// async function main(callback) {
//   await mongoose.connect('mongodb://localhost:27017/glossary');

//   const glossarySchema = mongoose.Schema({
//     word: String,
//     definition: String
//   });

//   const glossaryModel = mongoose.model('Glossary', glossarySchema);

//   const oak = new glossaryModel({
//     word: 'oak',
//     definition: 'a tree that bears acorns as fruit, and typically has lobed deciduous leaves. Oaks are common in many north temperate forests and are an important source of hard and durable wood used chiefly in construction, furniture, and (formerly) shipbuilding.'
//   });

//   await oak.save(function(err, reponse) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(reponse);
//     }
//   });
// }

// sub-problem: only invoke the save function when called
//