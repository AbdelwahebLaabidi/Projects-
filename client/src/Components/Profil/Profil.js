import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, useNavigate } from 'react-router-dom';
import { current, deleteProfil, editProfil } from '../../Redux/Actions/AuthAction';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addPost, getOwnPost} from '../../Redux/Actions/PostAction';
import PostCard from '../Posts/PostCard';

const Profil=()=>{

    const [show, setShow] = useState(false);
    const location = useLocation()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    useEffect(()=>{
        dispatch(current())
        dispatch(getOwnPost())
    },[])
    const User= useSelector(state=>state.AuthReducer.User)
    const OwnPosts= useSelector(state=>state.PostReducer.OwnPosts) 


    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(deleteProfil(User._id,navigate) )
    }

    const [titre, setTitre] = useState('')

    const handleAdd =(e)=>{
        e.preventDefault()
        dispatch(addPost({titre},location))
        setTitre('')
    }

    return(
        <div>
            {
            User &&    
            <>
            <h1>{User.firstName} {User.lastName} </h1>
            <img src='https://www.ulc.org/assets/ulc/blog/scaled/an-image-of-a-religious-belief-of-the-afterlife.jpg' alt='not found'/>
            <Button onClick={()=>{dispatch(editProfil(),navigate(`/EditProfil/${User._id}`))}} variant="primary">Edit Profil</Button>
            
            <Button onClick= {handleShow} variant="danger">Delete</Button>
            <Button onClick={()=>navigate('/')} variant="dark">Home</Button>


            <>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Control value={titre} onChange={(e)=>setTitre(e.target.value)} type="text"  placeholder="Que voulez-vous dire ?" />
                <Form.Control type="file" multiple />
            </Form.Group>

            <Button onClick={(e)=>titre != ''  &&  handleAdd(e)} variant="success">Add</Button>
            </>

            
            {
                OwnPosts.map((el) => <PostCard key={el._id} el ={el} />)
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>We will miss you {User.firstName} :( </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your Profil ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button  onClick={(e)=>{handleDelete(e); handleClose()}} variant="danger" > Confirm </Button>
                </Modal.Footer>
            </Modal>
            </>}
        </div>
        
    )
}

export default Profil