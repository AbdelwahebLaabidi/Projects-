import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions/AuthAction';

const NavProject=({isPlaying,setIsPlaying})=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state=> state.AuthReducer.User)
    const token = localStorage.getItem('token')
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to={'/'} >MusicLand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">    
                        <Nav className="me-auto">

                            {
                                token && user.role == 'admin' ?
                                    <>
                                    <Nav.Link as={Link} to={'/Profil'}>Profil</Nav.Link>
                                    <Nav.Link as={Link} to={'/UserListe'}>Users Listes</Nav.Link>
                                    <Nav.Link as={Link} to={'/Events'}>Events</Nav.Link>
                                    <Nav.Link as={Link} to={'/Videos'}>Videos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Photos'}>Photos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Music'}>Music</Nav.Link>
                                    <Nav.Link as={Link} to={'/PostsListe'}>All Posts</Nav.Link>
                                    </>
                                    :
                                    token && user.role == 'user' ?
                                    <>
                                    <Nav.Link as={Link} to={'/Profil'}>Profil</Nav.Link>      
                                    <Nav.Link as={Link} to={'/Events'}>Events</Nav.Link>
                                    <Nav.Link as={Link} to={'/Videos'}>Videos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Photos'}>Photos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Music'}>Music</Nav.Link>                         
                                    <Nav.Link as={Link} to={'/PostsListe'}>All Posts</Nav.Link>

                                    </>
                                    :
                                    <>
                                    <Nav.Link as={Link} to={'/Events'}>Events</Nav.Link>
                                    <Nav.Link as={Link} to={'/Videos'}>Videos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Photos'}>Photos</Nav.Link>
                                    <Nav.Link as={Link} to={'/Music'}>Music</Nav.Link>
                                    </>
                            }
                                    
                            <button  onClick={()=>setIsPlaying(!isPlaying)}>Playlist</button>
                        </Nav>
                        
                        <Nav>
                            {
                            token && user ?
                                <Nav.Link onClick={()=>dispatch(logout(),navigate('/Login'))}>Logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to={'/Login'}>Sign In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavProject