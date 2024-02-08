const { GETALLCOMMENTS, VIDCOM, GETONECOMMENT } = require("../ActionTypes/ComTypes")

const initialState = {
    Comments : [],
    OneComment : {}
}

const ComReducer =(state = initialState, action)=>{
    switch (action.type) {
        case GETALLCOMMENTS : return {...state, Comments : action.payload}
        case GETONECOMMENT : return {...state, OneComment : action.payload}
        case VIDCOM : return {...state, Comments : []}
        default: return state
    }
}


module.exports = ComReducer