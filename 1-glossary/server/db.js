const mongoose = require("mongoose");
const index = require('./index.js');

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/glossary');

  const wordsSchema = mongoose.Schema({
    word: String,
    definition: String
  })
}