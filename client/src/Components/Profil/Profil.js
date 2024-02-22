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
    const [image, setImage] = useState('')

    const handleAdd =(e)=>{
        e.preventDefault()
        dispatch(addPost({titre,image},location))
        setTitre('')
        setImage('')
    }

    return(
        <div>
            {
            User &&    
            <>
            <div className='profil'>
                <div>
                <h1 >{User.firstName} {User.lastName} </h1>
                <br/>
                <br/>
                <img style={{ borderRadius: "50%", width: "100%" , maxWidth: "300px"}} src={User.image} alt='not found'/>
                </div>
                <div className='butt'>
                <Button onClick={()=>{dispatch(editProfil(),navigate(`/EditProfil/${User._id}`))}} variant="primary">Edit Profil</Button>
                <Button onClick= {handleShow} variant="danger">Delete</Button>
                </div>
            </div>  
                <br/>
            <div className='Pinput'>
            <Form.Group controlId="formFileMultiple" className="mb-33">
                <div>
                <input onChange={(e)=>setTitre(e.target.value)} type="text" className="form-control" placeholder="Que voulez vous dire ?" />
                <Form.Control onChange={(e)=>setImage(e.target.files)} type="file" multiple />
                </div>
                <Button  onClick={(e)=> handleAdd(e)} className='theme-btn' style={{padding : "5px 35px"}}>Post</Button>

            </Form.Group>

            </div>

            
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
            <br/>
            <br/>
            <br/>
            <Button onClick={()=>navigate('/')} variant="dark">Home</Button>

        </div>
        
    )
}

export default Profil