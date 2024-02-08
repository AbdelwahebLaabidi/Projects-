import { CLEARERRORS, HANDLEERRORS } from "../ActionTypes/ErrorsTypes"

export const handleErrors =(msg)=>(dispatch)=>{

    const id = Math.random()

    dispatch({
        type : HANDLEERRORS,
        payload : {id, msg}
    })


    setTimeout(() => {
        dispatch({
            type : CLEARERRORS,
            payload : id
        })
    }, 3000);
}