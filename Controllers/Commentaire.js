const Commentaire = require("../Models/Commentaire")

exports.AddComment = async(req,res)=>{
    try {

        newComment = new Commentaire({...req.body, owner : req.user._id})

        await newComment.save()

        res.status(200).send({status : 200 , msg : "Comment added", newComment})

    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg : "Could Not add Comment"}]})
    }
}


exports.GetAllComments = async(req,res)=>{
    try {
            const {id} = req.params
            const AllComments = await Commentaire.find({post : id}).populate('owner').populate('post')

            res.status(200).send({status : 200, msg : "Comment geted", AllComments})

    } catch (error) {
            res.status(500).send({errors : [{status : 500, msg : "Could not get all comments "}]})
            }
        }

exports.DeleteComment = async(req,res)=>{
    try {
        const {id}= req.params
        const DelComment = await Commentaire.findByIdAndDelete(id)

        res.status(200).send({status : 200, msg : "Comment deleted", DelComment})

    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg : "could not delete comment"}]})
    }
}

exports.UpdateComment = async(req,res)=>{
    try {
            const {id}=req.params
            await Commentaire.findByIdAndUpdate(id,{$set : req.body})

            res.status(200).send({status : 200, msg : "Comment Updated"})

    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg : "Could not update Comment"}]})
    }
}

exports.GetOneComment = async(req,res)=>{
    try {
            const {id}=req.params
        const OneComment = await Commentaire.findById(id)

        res.status(200).send({status : 200, msg : "Comment geted", OneComment})
            
    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg : "Could not get the Comment"}]})
    }
}