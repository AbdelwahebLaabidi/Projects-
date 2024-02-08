const express = require('express')
const { SignUp, SignIn, GetAllUsers, DeleteProfil, UpdateProfil, GetOneUser, DeleteUser } = require('../Controllers/User')
const { ValidationRegister, validator } = require('../Middelware/Validation')
const { isAuth } = require('../Middelware/Auth')
const User = require('../Models/User')


const userRoute = express.Router()


userRoute.post('/SignUP', ValidationRegister, validator, SignUp )
userRoute.post('/SignIn', ValidationRegister, validator , SignIn)
userRoute.get('/userConnect',isAuth, (req,res)=>{res.send(req.user)})


userRoute.delete('/deleteProfil/:id', DeleteProfil)
userRoute.put('/updateProfil/:id', UpdateProfil)



userRoute.get('/getAllUsers',GetAllUsers)
userRoute.get('/getOneUser/:id', GetOneUser)
userRoute.delete('/deleteUser/:id', DeleteUser)



module.exports = userRoute