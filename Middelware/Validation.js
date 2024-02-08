const { body, validationResult } = require('express-validator')

exports.ValidationRegister = [
    body('password', 'Your password must contain min 8 char').isLength({min : '8'}),
    body('email', 'Your email is wrong').isEmail()
]


exports.validator=(req,res,next)=>{

    const  errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }
    next()
}