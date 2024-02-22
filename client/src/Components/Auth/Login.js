import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link, useNavigate} from "react-router-dom";

import '../../style.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Actions/AuthAction';



const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [remember, setRemember]= useState(false)


    const rememberHandler = () => {
        setRemember({remember: !remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setEmail ('')
            setPassword('')
            setRemember(false)
            ;
            validator.hideMessages();

            const userRegex = /^user+.*/gm;

            if (email.match(userRegex)) {
                toast.success('You successfully Login on Bloggar !');
                navigate('/home');
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };


    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2 style={{color : 'black'}}>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
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
                                type="password"
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
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={remember} onChange={rememberHandler}/>}
                                    label="Remember Me"
                                />
                                {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                            </Grid>
                            <Grid className="formFooter">
                                <Button onClick={(e)=>handleLogin(e)} fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </Grid>
                            
                            <p className="noteHelp">Don't have an account? <Link to="/register">Create free account</Link>
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

export default Login;