import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate, useParams } from "react-router-dom"
import { getOnePost} from "../../Redux/Actions/PostAction"
import Button from 'react-bootstrap/Button';
import CommentListe from "../Commentaires/CommentListe";
import {getAllComments, vidCom } from "../../Redux/Actions/ComAction";
import EditPost from "./EditPost";
import AddComment from "../Commentaires/AddComment";
import { current } from "../../Redux/Actions/AuthAction";
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'

const OnePost=()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(current())
        dispatch(vidCom())
        dispatch(getOnePost(id))
        dispatch(getAllComments(id))

    },[id])

    const OnePost = useSelector(state => state.PostReducer.OnePost)
    const User = useSelector(state=> state.AuthReducer.User)
    const Comments = useSelector(state => state.ComReducer.Comments)
    const locationEdit  = useSelector(state => state.PostReducer.locationEdit)

    return(

        <div >
            <div style={{display: "flex", flexDirection: "column" , alignItems: "center"}} >
            <h1 style={{color : 'black'}} > {OnePost.titre} </h1>
            <h5 style={{color : 'black'}} >{OnePost.description}</h5>

            <div >
                <Zoom>
                <img className="OneImg"  src={OnePost.image} alt="Not Found" />
                </Zoom>
                {/* {
            OnePost.image.map((el,i,t)=> <img style={{width: '550px', height: '460px'}}  src={el} alt="Not Found" />)
            } */}
            </div>
            <br/>
            <h5 style={{color : 'black'}} >{OnePost.time}</h5>
            </div>
            <AddComment/>
            <br/>
            {Comments && <CommentListe />}

            <br/>
        {
            OnePost?.owner?._id == User._id &&  <EditPost/>
        }
            
            <Button onClick={()=>navigate(locationEdit)} variant="dark">Back</Button>

        </div>
    )
}

export default OnePost