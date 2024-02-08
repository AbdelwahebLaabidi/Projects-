const express = require('express');
const Commentaire = require('../Models/Commentaire');
const { GetAllComments, AddComment, DeleteComment, UpdateComment, GetOneComment } = require('../Controllers/Commentaire');
const { isAuth } = require('../Middelware/Auth');

const commentaireRoute = express.Router()




commentaireRoute.post('/addComment',isAuth, AddComment)
commentaireRoute.get('/getAllComment/:id', GetAllComments)
commentaireRoute.delete('/deleteComment/:id', DeleteComment)
commentaireRoute.put('/updateComment/:id', UpdateComment)
commentaireRoute.get('/getOneComment/:id', GetOneComment )








module.exports = commentaireRoute