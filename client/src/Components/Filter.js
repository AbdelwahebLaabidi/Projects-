import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../Redux/Actions/AuthAction';
import { getAllPosts } from '../Redux/Actions/PostAction';
import { Link } from 'react-router-dom';

const Filter=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getAllPosts())
    },[])
    const AllUser = useSelector(state => state.AuthReducer.AllUser)
    const Posts = useSelector(state => state.PostReducer.Posts)

    const [tab,setTab] = useState([])

    const [search, setSearch]=useState('')

        useEffect(()=>{
            setTab([...AllUser,...Posts])
        },[AllUser])

    AllUser.filter((el,i,t)=> el.firstName.toUpperCase().includes(search.toUpperCase()))

    return(
        <div>
            <Form className="d-flex">
                <Form.Control  onChange={(e)=>{setSearch(e.target.value)}}
                value={search}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
        { 
        search != "" && tab.filter((el,i,t)=>el.hasOwnProperty('firstName')? 
        (el.firstName.toUpperCase().includes(search.toUpperCase())||el.lastName.toUpperCase().includes(search.toUpperCase())) 
        : 
        (el.titre.toUpperCase().includes(search.toUpperCase()||el.description.toUpperCase().includes(search.toUpperCase())
        ))
        ).map(el => el.hasOwnProperty('firstName')? <Link to={`/UserProfil/${el._id}`}><h1>{el.firstName} {el.lastName}</h1></Link> : <Link to={`/OnePost/${el._id}`}><h1>{el.titre}</h1></Link>)
        
        }

        </div>
    )
}

export default Filter