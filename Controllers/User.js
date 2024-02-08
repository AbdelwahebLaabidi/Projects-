const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.SignUp = async(req,res)=>{
    try {
            const {email, password} = req.body

            const found = await User.findOne({email})
            
            if(found){
                return res.status(400).send({ errors : [{status : 400, msg : 'Email already exist'}]})
            }

            const newUser = new User (req.body)

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            newUser.password = hashedPassword

            await newUser.save()

            const payload = {id : newUser._id}
            var token = jwt.sign(payload, process.env.privateKey);

            res.status(200).send({status : 200, msg:'User Registred', newUser, token})

    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not Sign Up'}]})
    }
}


exports.SignIn = async(req,res)=>{
    try {
        const {email,password}= req.body 
        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{status : 400, msg : 'email or password is wrong'}]})
        }

        const matchedPass = bcrypt.compareSync(password, found.password)

        if(!matchedPass){
            return res.status(400).send({errors : [{status : 400, msg : 'email or password is wrong'}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({status : 200, msg:'User Connected', found, token})

    } catch (error) {
            return res.status(500).send({errors : [{status : 500, msg :'Could not Sign In'}]})
    }
}

exports.DeleteProfil = async(req,res)=>{
    try {
        const {id} = req.params
    
        const deleteProfil = await User.findByIdAndDelete(id)
    
        res.status(200).send({status : 200, msg : 'User deleted', deleteProfil})
    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not delete User'}]})
    }
    }

exports.UpdateProfil = async(req,res)=>{
    try {
        const {id}=req.params


        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({status : 200, msg : 'User updated' })

    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not update User'}]})
    }
}

exports.GetAllUsers =  async(req,res)=>{

    try {
        const newUser = await User.find()

    res.status(200).send({status : 200, msg : 'All Users', newUser})

    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not get Users'}]})
    }
}


exports.GetOneUser =async(req,res)=>{
    try {
        const {id}= req.params

        const OneUser = await User.findById(id)

        res.status(200).send({status : 200, msg : 'User geted', OneUser})

    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not get the User'}]})
    }
}

exports.DeleteUser = async(req,res)=>{
    
    try {
        const {id}=req.params

        const deleteUser = await User.findByIdAndDelete(id)

        res.status(200).send({status : 200, msg :'User deleted', deleteUser})

    } catch (error) {
        return res.status(500).send({errors : [{status : 500, msg : 'Could not Delete User'}]})
    }
}