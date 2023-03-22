const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({    
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    image: String,
    description: String,
    rating: String,
    minplayers: String,
    maxplayers: String,    
});

const CommentModel = mongoose.model("Game", commentSchema);

module.exports = CommentModel;
