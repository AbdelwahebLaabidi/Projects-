const mongoose = require('mongoose')

const PostSchema= new mongoose.Schema({

    titre : String,
    description : String,
    image : String,
    video : String,
    time : { type: JSON, default:  new Date().toJSON() },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "UserProject"
    }


})

module.exports = mongoose.model('post', PostSchema)