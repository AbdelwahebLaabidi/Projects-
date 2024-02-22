const mongoose = require('mongoose')

const CommentaireSchema = new mongoose.Schema({
    commentaire : String,
    image : Array,
    time : { type: JSON, default:  new Date().toJSON() },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "UserProjects"
    },
    post :  {
        type : mongoose.Types.ObjectId,
        ref : "posts"
    },

})


module.exports= mongoose.model('ComSchema', CommentaireSchema)


