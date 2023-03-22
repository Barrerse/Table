const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({    
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    gameid: String,
    name: String,
    image: String,
    description: String,
    rating: String,
    minplayers: String,
    maxplayers: String,    
});

const GameModel = mongoose.model("Game", gameSchema);

module.exports = GameModel;
