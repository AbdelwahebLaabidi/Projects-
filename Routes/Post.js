const express = require('express')
const Post = require('../Models/Post')
const { AddPost, GetAllPosts, DeletePost, UpdatePost, GetOnePost, GetUserPost, getUserPostSearch } = require('../Controllers/Post')
const { isAuth } = require('../Middelware/Auth')

const postRoute = express.Router()



postRoute.post('/addPost',isAuth,AddPost)
postRoute.get('/getAllPosts', GetAllPosts)
postRoute.delete('/deletePost/:id',DeletePost)
postRoute.put('/updatePost/:id', UpdatePost)
postRoute.get('/getOnePost/:id', GetOnePost)
postRoute.get('/getUserPosts',isAuth,GetUserPost)
postRoute.get('/getUserPostAbdo/:id', getUserPostSearch)

module.exports = postRoute