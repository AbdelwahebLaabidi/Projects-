import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, useNavigate} from "react-router-dom";
import '../../style.scss';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Actions/AuthAction';


const Register = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('')
    const [ConfirmPassword, setConfirmPassword]= useState('');

    const dispatch = useDispatch()

    // validator.showMessages();

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('');
            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            navigate('/login');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({firstName,lastName,email,password,ConfirmPassword},navigate))
    }
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2 style={{color : "black"}}>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="First Name"
                                variant="outlined"
                                name="first_Name"
                                label="First Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e)=>setFirstName(e.target.value)}
                                onChange={(e)=>setFirstName(e.target.value)}
                            />
                            {validator.message('first Name', firstName, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Last Name"
                                variant="outlined"
                                name="last_Name"
                                label="Last Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e)=>setLastName(e.target.value)}
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                            {validator.message('last Name', lastName, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e)=>setEmail(e.target.value)}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            {validator.message('email', email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e)=>setPassword(e.target.value)}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            {validator.message('password', password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e)=>setConfirmPassword(e.target.value)}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            />
                            {validator.message('confirm password', ConfirmPassword, `in:${ConfirmPassword}`)}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button onClick={(e)=>handleRegister(e)} fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    )
};

export default Register;