import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../Redux/Actions/ComAction';
import Button from 'react-bootstrap/Button';


const AddComment=()=>{

    const dispatch = useDispatch()

    const OnePost = useSelector(state => state.PostReducer.OnePost)

    const [commentaire,setCommentaire] = useState('')
    const [image,setImage] = useState('')


    const handelAddComment=(e)=>{
        e.preventDefault()
        
        dispatch(addComment({commentaire,image, post : OnePost._id}))
        setCommentaire('')
        setImage('')

}
    return (

        <div>
            <Form style={{display : 'flex',alignItems: 'flex-start', justifyContent: 'center'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} style={{marginLeft: '-15px', marginRight : '720px'}} type="text" placeholder="votre commentaire.." />
                    <Form.Control onChange={(e)=>setImage(e.target.files[0])} style={{marginLeft: '-15px', marginRight : '720px'}} type="file" multiple />
                </Form.Group>
                {(commentaire || image) != ''  &&   <Button onClick={(e)=> handelAddComment(e)} variant="primary">Publier</Button>}
            </Form>
        </div>
    )
}


export default AddComment