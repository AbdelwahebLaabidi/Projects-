import { GETALLPOSTS, GETONEPOST, GETOWNPOST, GETPOSTSEARCH, LOCATIONEDITPOST } from "../ActionTypes/PostTypes"
import axios from "axios"
import { handleErrors } from "./ErrorsAction"


export const getAllPosts =()=>async(dispatch)=>{
    try {

        const res = await axios.get('/api/post/getAllPosts')

        dispatch({
            type : GETALLPOSTS,
            payload : res.data.allPosts
        })


    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}


export const addPost=(newPost,location)=>async(dispatch)=>{
    // const img = new FormData();
    // img.append('image', newPost.image);

    try {
        var photo = []
        for (let i = 0; i < newPost.image.length; i++) {
               const img = new FormData();
                img.append('image', newPost.image[i]);
                 var resImg =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3c643024304d938b0bf8d64fdc277d94',img)
                photo.push(resImg.data.data.url)
        }

        // const resImg =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3c643024304d938b0bf8d64fdc277d94',img)
        const obj = {...newPost, image : photo}
            await axios.post('/api/post/addPost',obj ,{
                headers : {
                    authorisation : localStorage.getItem('token')
                }
            })
            location.pathname == '/Profil' ? dispatch(getOwnPost()) :  dispatch(getAllPosts())
            

    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

export const deletePost=(id,location)=>async(dispatch)=>{
try {

        await axios.delete(`/api/post/deletePost/${id}`)

        location.pathname == '/Profil' ? dispatch(getOwnPost()) :  dispatch(getAllPosts())
    
} catch (error) {
    error.response.data.errors.forEach(element => {
        dispatch(handleErrors(element.msg))
    })
}
}

export const getOnePost =(id)=>async(dispatch)=>{
    try {
        
        const res = await axios.get(`/api/post/getOnePost/${id}`)
        dispatch({
            type : GETONEPOST,
            payload : res.data.OnePost
        })
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

export const updatePost =(id, OnePost)=>async(dispatch)=>{
    const img = new FormData();
    img.append('image', OnePost.image);
    try {
        
        const resImg =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3c643024304d938b0bf8d64fdc277d94',img)

        await axios.put(`/api/post/updatePost/${id}`, {...OnePost,image : resImg.data.data.url})
        dispatch(getOnePost(id))
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}



export const getOwnPost =()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                authorisation : localStorage.getItem('token')
            }
        }
        const res = await axios.get(`/api/post/getUserPosts`,config)

        dispatch({
            type : GETOWNPOST,
            payload : res.data.OnePost
        })


    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

export const locationEditPost=(payload)=>{
    return(
        {
            type : LOCATIONEDITPOST,
            payload
        }
    )
}

export const getPostSearch =(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/post/getUserPostAbdo/${id}`)
        dispatch({
            type : GETPOSTSEARCH,
            payload : res.data.PostSearch
        })

    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}
