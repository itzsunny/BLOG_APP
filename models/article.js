const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    author_name: {
      type: String,
      required: true
    },
    author_introduction: {
      type: String,
      required: true
    },
    profile_pic: {
      type: String
    },
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
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Article",articleSchema);
