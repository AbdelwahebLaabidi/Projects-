import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorsReducer from './ErrorsReducer'
import PostReducer from './PostReducer'
import ComReducer from './ComReducer'

const rootReducer = combineReducers({AuthReducer, ErrorsReducer, PostReducer, ComReducer})


export default rootReducer