const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({    
    title: String,
    photos: [String],
    description: String,
});