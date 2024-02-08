var jwt = require('jsonwebtoken');
const User = require('../Models/User');


exports.isAuth = async(req,res,next)=>{

try {

    const token = req.header('authorisation')
    var decoded = jwt.verify(token, process.env.privateKey);

    if(!decoded){
        res.status(400).send({errors : [{status : 400, msg : 'token invalid'}]})
    }

    const foundUser = await User.findById(decoded.id)

    req.user = foundUser

    next()
} catch (error) {
    res.status(500).send({errors : [{status : 500, msg : 'User not authorised'}]})

}
}