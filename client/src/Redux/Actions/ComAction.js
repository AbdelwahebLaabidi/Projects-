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

export const addComment=(newComment)=>async(dispatch)=>{
    
    const img = new FormData();
    img.append('image', newComment.image);

    try {
        if(newComment.image == ''){
            
        await axios.post('/api/commentaire/addComment', newComment, {
            headers : {
                authorisation : localStorage.getItem('token')
            }
        })
        }else{
            const resImg =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3c643024304d938b0bf8d64fdc277d94',img)
            const objCom = {...newComment, image : resImg.data.data.url}
    
            await axios.post('/api/commentaire/addComment', objCom, {
                headers : {
                    authorisation : localStorage.getItem('token')
                }
            })
        }
      
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
    const img = new FormData();
    img.append('image', OneComment.image);
    try {
        if (OneComment.image == '') {
            await axios.put(`/api/commentaire/updateComment/${id}`,OneComment)
        } else {
            const resImg =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3c643024304d938b0bf8d64fdc277d94',img)
        await axios.put(`/api/commentaire/updateComment/${id}`,{...OneComment,image : resImg.data.data.url})

        }
    

        


        dispatch(getAllComments(post))
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}

