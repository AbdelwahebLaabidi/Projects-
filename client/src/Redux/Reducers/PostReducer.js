import { GETALLPOSTS, GETONEPOST, GETOWNPOST, LOCATIONEDITPOST } from "../ActionTypes/PostTypes"

const initialState = {
    Posts : [],
    OnePost : {},
    OwnPosts : [],
    locationEdit :''
}

const PostReducer =(state = initialState, action)=>{
    switch (action.type) {

        case GETALLPOSTS : return {...state, Posts : action.payload}
        case GETONEPOST : return { ...state , OnePost : action.payload}
        case GETOWNPOST : return {...state, OwnPosts : action.payload}
        case LOCATIONEDITPOST : return {...state, locationEdit : action.payload}
        default: return state
    }
}


export default PostReducer