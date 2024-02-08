const mongoose = require('mongoose')

const CommentaireSchema = new mongoose.Schema({
    commentaire : String,
    image : String,
    time : { type: JSON, default:  new Date().toJSON() },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "UserProject"
    },
    post :  {
        type : mongoose.Types.ObjectId,
        ref : "post"
    },

})


module.exports= mongoose.model('ComSchema', CommentaireSchema)


