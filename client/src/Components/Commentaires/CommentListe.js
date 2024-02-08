import {useSelector } from "react-redux"
import CommentCard from "./CommentCard"


const CommentListe =()=>{



    const Comments = useSelector(state => state.ComReducer.Comments)
    

    return(
        <div>
                {
                Comments && Comments.map((el)=> <CommentCard key={el._id} el={el}/>)
                }
        </div>
    )
}


export default CommentListe