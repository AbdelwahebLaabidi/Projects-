import { GETALLCOMMENTS, GETONECOMMENT, VIDCOM } from "../ActionTypes/ComTypes";
import { handleErrors } from "./ErrorsAction";
import axios from "axios";


export const vidCom=()=>{
    return(
        {
            type : VIDCOM
        }
    )
}
export const getAllComments =(id)=>async(dispatch)=>{
    try {
    
        const res = await axios.get(`/api/commentaire/getAllComment/${id}`)

        dispatch({
            type : GETALLCOMMENTS,
            payload : res.data.AllComments
        })
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}
// newComment
// {
//     "commentaire" : "hamdoula mchet",
//     "post" : "65c0f946a7aebb7e6bef3a4a"
// }
export const addComment=(newComment)=>async(dispatch)=>{
    try {
        
        await axios.post('/api/commentaire/addComment', newComment, {
            headers : {
                authorisation : localStorage.getItem('token')
            }
        })
        dispatch(getAllComments(newComment.post))

    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        });
    }
}


export const deleteComment=(del)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/commentaire/deleteComment/${del.comm}`)
        dispatch(getAllComments(del.post))
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}


export const getOneComment=(id)=>async(dispatch)=>{
    try {

        const res = await axios.get(`/api/commentaire/getOneComment/${id}`)
        dispatch({
            type : GETONECOMMENT,
            payload : res.data.OneComment
        })
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

export const updateComment=(id, post,OneComment)=>async(dispatch)=>{
    try {

        await axios.put(`/api/commentaire/updateComment/${id}`,OneComment)
        dispatch(getAllComments(post))
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

