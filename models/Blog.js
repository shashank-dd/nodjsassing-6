const { string, date } = require('joi');
const mongooose = require('mongoose');
const Schema = mongooose.Schema;
const ObjectId = Schema.ObjectId;
const blogSchema = new mongooose.Schema({
  
    topic:{type:String,required:true,unique:true},
    
 description:{type:String,required:true,unique:true},
 posted_at:{type:Date,unique:true},
 posted_by:{type:String,required:true,unique:true}


})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;
