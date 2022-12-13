const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    // Your code goes here
    id:{type:Number},
    topic: {type:String, required:true},
    description: {type:String, required:true},
    posted_at: {type:String, required:true},
    posted_by: {type:String, required:true}
    
})

const Blog = mongoose.model('blogs', blogSchema); // here blogs is the collections that is created inside blog database

module.exports = Blog;


