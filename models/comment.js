const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    author: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    articleId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Article"
    }
})

module.exports = mongoose.model("Comment", commentSchema);