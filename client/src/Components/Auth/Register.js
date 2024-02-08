import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../Redux/Actions/AuthAction';


const Register=()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

const [firstName, setFirstName]= useState('')
const [lastName, setLastName]= useState('')
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')
const [ConfirmPassword, setConfirmPassword]= useState('')

const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register({firstName,lastName,email,password,ConfirmPassword},navigate))
}

    return(
        <div className='login'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Enter password" />
                </Form.Group>

                <Button onClick={(e)=>handleRegister(e)} variant="primary" type="submit">Sign Up</Button>
                <Button onClick={()=>navigate('/Login')} variant="primary" type="submit">Login</Button>

            </Form>
        </div>
    )
}

export default Register