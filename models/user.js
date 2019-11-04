const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    author_name:{
        type:String,
        required:true
    },
    author_introduction:{
        type:String,
    },
    profile_pic:{
        type:String
    },
    article_title:{
        type:String,
        
    }
})