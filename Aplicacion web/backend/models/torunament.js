const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  participants: [String]
});

module.exports = mongoose.model('Tournament', tournamentSchema);
