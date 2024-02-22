import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import EventsData from "../EventsData"
import Button from 'react-bootstrap/Button';

const EventsProfil =()=>{
    const {id} = useParams()
    const navigate = useNavigate()

    
    const event = EventsData.find(el=> el.id == id)
    return(
        <div>
        <div className="eventPr">
            <div >
                <div className="pop">
                    <h1>{event.name}</h1>
                    <h3>{event.EventDate}</h3>
                </div>
                <p className="desc">{event.description}</p>
            </div>
            <img style={{height : "600px", width : " 500px"}} src={event.posterImg} alt="not found"/>
        </div>

        <Button onClick={()=>navigate('/Events')} variant="dark">Back</Button>
        </div>
    )
}

export default EventsProfil