const Post = require("../Models/Post")

exports.AddPost =  async(req,res)=>{
    try {
        const newPost = new Post({...req.body,owner : req.user._id})
        
        await newPost.save()
    
        res.status(200).send({status : 200, msg : "Post added",newPost})
        
    } catch (error) {
        res.status(500).send({errors : [{status:500, msg :"Could not add post"}]})
    }
    }

    exports.GetAllPosts= async(req,res)=>{
        try {
            const allPosts = await Post.find().populate('owner')
            res.status(200).send({status : 200, msg : "All posts geted", allPosts })
        } catch (error) {
            res.status(500).send({errors : [{status : 500, msg : " Could not get all posts"}]})
        }
    }

    exports.DeletePost = async(req,res)=>{
        try {
            const {id}= req.params
            const deletedPost = await Post.findByIdAndDelete(id)
            res.status(200).send({status : 200, msg : 'Post deleted', deletedPost})
        } catch (error) {
            res.status(500).send({errors : [{status : 500, msg : "Could not delete Post"}]})
        }
    }

    exports.UpdatePost = async(req,res)=>{
        try {
            const  {id} = req.params
            await Post.findByIdAndUpdate(id, {$set : req.body})
    
            res.status(200).send({status : 200, msg : "Post updated"})
        } catch (error) {
            res.status(500).status({errors : [{status : 500, msg : "Could not update Post"}]})
        }
    }

    exports.GetOnePost = async(req,res)=>{
        try {
            const {id}=req.params
    
            const OnePost = await Post.findById(id).populate('owner')
            res.status(200).send({status : 200, msg : "Post geted", OnePost})
    
        } catch (error) {
            res.status(500).send({errors : [{status : 500, msg :"Could not get the post"}]})
        }
    }


    exports.GetUserPost = async(req,res)=>{
        try {

    
            const OnePost = await Post.find({owner : req.user._id}).populate('owner')
            res.status(200).send({status : 200, msg : "Post geted", OnePost})
    
        } catch (error) {
            res.status(500).send({errors : [{status : 500, msg :"Could not get the post"}]})
        }
    }

