import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatePost } from "../../Redux/Actions/PostAction"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

const EditPost=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const OnePost = useSelector(state => state.PostReducer.OnePost)

    const [titre, setTitre] = useState(OnePost.titre)
    const [description, setDescription] = useState(OnePost.description)
    const [image, setImage] = useState(OnePost.image)
    
    useEffect(()=>{
        setTitre(OnePost.titre)
        setDescription(OnePost.description)
        setImage(OnePost.image)
    },[OnePost])

    const handleUpdatePost=(e)=>{
        e.preventDefault()
        dispatch(updatePost(id, {titre, description,image}))
        handleClose()
    }

    return (
        <>
        <Button onClick={()=>handleShow() } variant="secondary">Edit</Button>
        <Modal show={show} onHide={handleClose}>
        </Modal> 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton> </Modal.Header>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titre</Form.Label>
                <Form.Control value={titre} onChange={(e)=>setTitre(e.target.value)}  type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Decription</Form.Label>
                <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)}  type="text"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control value={image} onChange={(e)=>setImage(e.target.value)}  type="text" />
            </Form.Group>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={(e)=>handleUpdatePost(e)}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default EditPost