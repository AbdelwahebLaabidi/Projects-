import {useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../Redux/Actions/ComAction';



const EditComment=({el})=>{

const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const [commentaire,setCommentaire] = useState(el.commentaire)
    const OnePost = useSelector(state => state.PostReducer.OnePost)

const handleUpdateComment =(e)=>{
    e.preventDefault()
    dispatch(updateComment(el._id,OnePost._id,{commentaire}))
    handleClose()
} 


    return (

        <div>
            <Button onClick={()=>handleShow() } variant="secondary">Edit</Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton> </Modal.Header>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={commentaire} onChange={(e)=>setCommentaire(e.target.value)}  type="text" placeholder="votre commentaire.." />
                </Form.Group>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button onClick={(e)=>handleUpdateComment(e)} variant="primary" >Publier</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}


export default EditComment