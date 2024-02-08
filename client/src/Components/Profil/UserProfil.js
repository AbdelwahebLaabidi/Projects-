import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneUser } from '../../Redux/Actions/AuthAction';

const UserProfil=()=>{

    const dispatch = useDispatch()
    const navigate= useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const OneUser = useSelector(state => state.AuthReducer.OneUser)


    
    return(
        <div >
            <Card style={{ width: '18rem', marginTop : '20px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{OneUser.firstName} </Card.Title>
                    <Card.Title>{OneUser.lastName} </Card.Title>
                    <Card.Text>{OneUser.email}</Card.Text>
                </Card.Body>
            </Card>

            <Button onClick={()=>navigate('/UserListe')} variant="dark">Back</Button>

        </div>
    )
}

export default UserProfil