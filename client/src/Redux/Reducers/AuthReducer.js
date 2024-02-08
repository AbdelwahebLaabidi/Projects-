import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER,GETALLUSERS, GETONEUSER } from "../ActionTypes/AuthTypes"

const intialState = {
    User : {},
    AllUser : [],
    OneUser : [],
    errors : []
}


const AuthReducer=(state=intialState, action)=>{
    switch (action.type) {

        case FAIL : return {...state, errors :action.payload, User : null}
        case REGISTER : 
        localStorage.setItem('token' , action.payload.token)
        return {...state, User : action.payload.newUser, errors : null}

        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state, User : action.payload.found}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, User : null, errors : null}

        case CURRENT : return {...state, User : action.payload}

        case GETALLUSERS : return {...state, AllUser : action.payload}
        case GETONEUSER : return {...state, OneUser : action.payload}

        default: return state
    }
}

export default AuthReducer