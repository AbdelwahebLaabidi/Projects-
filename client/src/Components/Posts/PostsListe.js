import { useEffect } from "react"
import {useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../../Redux/Actions/PostAction"
import PostCard from "./PostCard"


const PostsListe=()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    const Posts = useSelector(state => state.PostReducer.Posts)




    return(
        
        <div>

                {
                Posts.map((el) => <PostCard key={el._id} el ={el} />)
                }
        </div>
    )
}

export default PostsListe