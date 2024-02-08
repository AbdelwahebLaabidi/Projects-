import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import { current, updateProfil } from '../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';


const EditProfil=()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(current())
    },[])

    const User = useSelector(state=> state.AuthReducer.User)

    const [firstName, setFirstName]=useState(User.firstName)
    const [lastName, setLastName] = useState(User.lastName)
    const [email,setEmail]=useState(User.email)

    useEffect(()=>{
        setFirstName(User.firstName)
        setLastName(User.lastName)
        setEmail(User.email)
    },[User])

    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(updateProfil(User._id, {firstName,lastName,email},navigate))
    }

    return(
        <div className='editProfil'>

            <img src='https://www.ulc.org/assets/ulc/blog/scaled/an-image-of-a-religious-belief-of-the-afterlife.jpg' alt='not found'/>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                </Form.Group>
                
            </Form>

            <Button onClick={(e)=>handleEdit(e)} variant="primary">Edit</Button>
            <Button onClick={()=>navigate('/Profil')} variant="dark">Back</Button>

        </div>
    )
}

export default EditProfil