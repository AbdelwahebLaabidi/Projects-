import Button from 'react-bootstrap/Button';
import { useDispatch} from 'react-redux';
import { deletePost, locationEditPost } from '../../Redux/Actions/PostAction';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const PostCard=({el})=>{
    
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    const DeletePost=()=>{
        dispatch(deletePost(el._id,location))
    }
    const location = useLocation()



    return(
        <div>
            <Card>
                <Card.Text> {el.time}</Card.Text>
                {
                    location.pathname !== "/Profil"
                    } 
                {
                location.pathname !== "/Profil" && <Card.Text> Post Owner : {el.owner.firstName} {el.owner.lastName} </Card.Text>
                } 
                <Card.Text> {el.titre}</Card.Text>
                <Card.Img style={{width : '1000px', height : '300px',marginLeft: '250px'}} variant="top" src={el.image} />
                <br/>

                <Card.Body>
                <Button onClick={()=> {dispatch(locationEditPost(location.pathname));navigate(`/OnePost/${el._id}`)}} variant="secondary">View</Button> 
                <Button onClick={DeletePost} variant="danger">Delete</Button>
                </Card.Body>
            </Card>

            

    
        </div>
    )
}

export default PostCard