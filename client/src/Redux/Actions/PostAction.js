import { GETALLPOSTS, GETONEPOST, GETOWNPOST, LOCATIONEDITPOST } from "../ActionTypes/PostTypes"
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
    try {
            await axios.post('/api/post/addPost', newPost,{
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
    try {
        
        await axios.put(`/api/post/updatePost/${id}`, OnePost)
        dispatch(getOnePost(id))
        // navigate(`/OnePost/${id}`)
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
