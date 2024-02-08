const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    role : {type : String, default :'user'}
})

module.exports = mongoose.model('UserProject', userSchema)