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
        <div >

            <Card style={{alignItems: "center", marginLeft: "150px", marginRight : ' 150px', marginTop : '20px', paddingTop : '20px' }}>
                {
                    location.pathname !== "/Profil"
                    } 
                    <div>
                    {
                location.pathname !== "/Profil" && <Card.Text > <i className="fi flaticon-user"></i> By {el.owner.firstName} {el.owner.lastName} </Card.Text>
                }
                {
                    el.image.map((d,i,t)=> <Card.Img key={i}  src={d}  style={{width : '100%', maxWidth : '300px',    height: "300px", borderRadius: '8%'}} variant="top" />)
                }
                
                    </div>
                <br/>
                <div className='Pcard' >
                    <div >
                        <Card.Text > {el.titre}</Card.Text>
                        <Card.Text > {el.description}</Card.Text>
                        <Card.Text > <i className="fi flaticon-calendar"></i> {el.time}</Card.Text>
                    </div>
                    <div>
                        <Card.Body>
                        <Button onClick={()=> {dispatch(locationEditPost(location.pathname));navigate(`/OnePost/${el._id}`)}} variant="secondary">View</Button> 
                        <Button onClick={DeletePost} variant="danger">Delete</Button>
                        </Card.Body>
                    </div>
                </div>


            </Card>

            

    
        </div>
    )
}

export default PostCard