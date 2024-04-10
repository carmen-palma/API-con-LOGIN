const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Character', characterSchema);