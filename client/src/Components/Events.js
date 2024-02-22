import EventsData from "../EventsData";
import EventsCard from "./EventsCard";

const Events = () => {



    return (
        <div  className='EventCa'>
                    {
                        EventsData.map((el)=> <EventsCard key={el.id} el={el}/>)
                    }
        </div>
    )
}

export default Events;
