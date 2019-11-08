const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
   
    article_title: {
      type: String,
      required: true
    },
    article_intro: {
      type: String
    },
    article_subtitle: {
      type: String
    },
    article_snippets:{
      type:String
    },
    article_description: {
      type: String
    },
    likes: {
      type:Number,
      default:0
    },
    author: {
      type:Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
    comment:{
      type:Schema.Types.ObjectId,
      ref:"Comment"
    },
  },   
  { timestamps: true }
);


module.exports = mongoose.model("Article",articleSchema);
