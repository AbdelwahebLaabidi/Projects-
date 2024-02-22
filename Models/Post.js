const mongoose = require('mongoose')

const PostSchema= new mongoose.Schema({

    titre : String,
    description : String,
    image : Array,
    time : { type: JSON, default:  new Date().toJSON() },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "UserProjects"
    }


})

module.exports = mongoose.model('posts', PostSchema)