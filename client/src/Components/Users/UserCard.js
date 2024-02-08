import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { deleteUser} from '../../Redux/Actions/AuthAction';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const UserCard=({el})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const DeleteUser =()=>{
        dispatch(deleteUser(el._id),navigate)
    }


    return(

        <div>
            <Card style={{ width: '18rem', marginTop : '20px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{el.firstName} {el.lastName}</Card.Title>
                    <Card.Text>{el.email}</Card.Text>
                    <Button as={Link} to={`/UserProfil/${el._id}`} variant="secondary">View</Button>
                    <Button onClick= {handleShow} variant="danger">Delete User</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this User ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button  onClick={()=>{DeleteUser(); handleClose()}} variant="danger" > Confirm </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UserCard