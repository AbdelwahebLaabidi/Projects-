import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const EventsCard =({el})=>{
    return(
        <div>
            <Card style={{ width: '25rem', height:'580px',padding:'20px', marginBottom : "10px" }}>
                <Card.Img style={{maxHeight : '400px'}} src={el.posterImg} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text> {el.EventDate} </Card.Text>
                    <Link to={`/EventProfil/${el.id}`}>Event details</Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default EventsCard