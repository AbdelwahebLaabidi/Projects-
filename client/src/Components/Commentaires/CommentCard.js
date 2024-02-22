import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../Redux/Actions/ComAction';
import EditComment from './EditComment';
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'



const CommentCard =({el})=>{
const dispatch = useDispatch()

const Comments = useSelector(state => state.ComReducer.Comments)
const User = useSelector(state=> state.AuthReducer.User)


    return(
        <div>
            <Card >
            <h6 style={{color : 'black'}} >{el.owner.firstName} {el.owner.lastName}</h6>

                <div style={{marginLeft : '150px'}}>
                    <Card.Body className='nameCom' style={{color : 'black'}} >{el.commentaire}</Card.Body>
                    <Zoom>
                    {el.image != "" &&<Card.Img style={{width: '23%', height: '200px'}} src={el.image} alt="Not Found"/>}
                    </Zoom>
                </div>

<br/>

                <div style={{display : 'flex', justifyContent : 'center', marginBottom : '15px'}}>
                    {
                    el?.owner?._id == User._id && <EditComment el={el}/>
                    }

                    {
                        (el?.owner?._id == User._id || User.role == 'admin') &&
                        <Button style={{width: '85px'}} onClick={()=>dispatch(deleteComment({comm : el._id,post : el.post._id}))} variant="danger">Delete</Button>
                    }
                </div>
            </Card>
        </div>
    )
}

export default CommentCard