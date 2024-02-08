import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../Redux/Actions/ComAction';
import EditComment from './EditComment';



const CommentCard =({el})=>{
const dispatch = useDispatch()

const Comments = useSelector(state => state.ComReducer.Comments)
const User = useSelector(state=> state.AuthReducer.User)


    return(
        <div>
            <Card>
                <h1>{el.owner.firstName} {el.owner.lastName}</h1>
                <Card.Body>{el.commentaire}</Card.Body>

                {
                el?.owner?._id == User._id && <EditComment el={el}/>
                }

                {
                     (el?.owner?._id == User._id || User.role == 'admin') &&
                     <Button onClick={()=>dispatch(deleteComment({comm : el._id,post : el.post._id}))} variant="danger">Delete</Button>
                }
                
            </Card>
        </div>
    )
}

export default CommentCard