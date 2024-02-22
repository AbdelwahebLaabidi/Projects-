import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneUser } from '../../Redux/Actions/AuthAction';
import { getPostSearch } from '../../Redux/Actions/PostAction';

const UserProfil=()=>{

    const dispatch = useDispatch()
    const navigate= useNavigate()
    const {id} = useParams()
    
    useEffect(()=>{
        dispatch(getOneUser(id))
        dispatch(getPostSearch(id))
        },[id])

        const OneUser = useSelector(state => state.AuthReducer.OneUser)
        const PostSearch = useSelector(state => state.PostReducer.PostSearch)
    

    return(
        <div >
            <Card style={{ width: '18rem', marginTop : '20px' }}>
                <Card.Img style={{height: "250px"}} variant="top" src={OneUser.image} />
                <Card.Body>
                    <Card.Title>{OneUser.firstName} </Card.Title>
                    <Card.Title>{OneUser.lastName} </Card.Title>
                    <Card.Text>{OneUser.email}</Card.Text>
                </Card.Body>
            </Card>

{
    PostSearch.map((el,i,t)=>
    <Card key={i} style={{ width: '18rem', marginTop : '20px' }}>
                <Card.Title>{el.titre} </Card.Title>
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                    <Card.Title>{el.description} </Card.Title>
                    <Card.Text>{el.Video}</Card.Text>
                </Card.Body>
            </Card>)
}
            


            <Button onClick={()=>navigate('/UserListe')} variant="dark">Back</Button>

        </div>
    )
}

export default UserProfil