import {LOGIN, LOGOUT, REGISTER, CURRENT, EDIT,GETALLUSERS, GETONEUSER} from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleErrors } from "./ErrorsAction"

export const register=(newUser, navigate)=>async(dispatch)=>{
    try {

            const res = await axios.post('/api/authProject/SignUp',newUser)

            dispatch({
                type : REGISTER,
                payload : res.data

            })

            navigate('/Profil')

    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        });
    }
}


export const login=(cordUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/authProject/SignIn', cordUser)
        dispatch({
            type : LOGIN,
            payload : res.data
        })

        navigate('/Profil')
    } catch (error) {

        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        });
    }
}

export const logout=()=>{
    return({
        type : LOGOUT
    }
    )
    
}


export const current=()=>async(dispatch)=>{

            const config = {
                headers : {
                    authorisation : localStorage.getItem('token')
                }
            }
    try {    

        const res = await axios.get('/api/authProject/userConnect', config )

        dispatch({
            type : CURRENT,
            payload : res.data
        })

    } catch (error) {

        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        });
        
    }
}

export const editProfil=()=>{
    return({
        type : EDIT
    })
}


export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
        dispatch(logout())

        navigate('/Register')

        await axios.delete(`/api/authProject/deleteProfil/${id}`)

    
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}



export const updateProfil =(id,updateCoord ,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/authProject/updateProfil/${id}`,updateCoord)

        navigate('/Profil')
    
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
}
export const getAllUsers=()=>async(dispatch)=>{
    try {
        
        const res = await axios.get('/api/authProject/getAllUsers')
    
        dispatch({
            type : GETALLUSERS,
            payload : res.data.newUser
        })
    
    
    } catch (error) {
            error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        })
    }
    }
    
    export const getOneUser =(id)=>async(dispatch)=>{
        try {
            const res = await axios.get(`/api/authProject/getOneUser/${id}`)
            dispatch({
                type : GETONEUSER,
                payload : res.data.OneUser
            })
        
        } catch (error) {
            error.response.data.errors.forEach(element => {
                dispatch(handleErrors(element.msg))
            })
        }
    }
    
    
    export const deleteUser=(id)=>async(dispatch)=>{
        try {
            await  axios.delete(`/api/authProject/deleteUser/${id}`)
            dispatch(getAllUsers())
        
            
        } catch (error) {
            error.response.data.errors.forEach(element => {
                dispatch(handleErrors(element.msg))
            })
        }
    }


