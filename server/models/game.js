const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedGames` array in User.js
const gameSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  // saved game id from board game API
  gameId: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = gameSchema;
