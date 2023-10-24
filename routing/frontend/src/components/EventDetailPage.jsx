import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "./EventItem";

const EventDetailPage = () => {  
    const data = useRouteLoaderData('event-detail');
    const eventDetails = data.event;  

    return (
        <EventItem event={eventDetails}/>
    )
};

export default EventDetailPage;

export async function loader({request, params}) {
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8000/events/${eventId}`);

    if (!response.ok) {
        throw json({message: 'Could not fetch details'}, {
            status: 500
        })
    }

    return response;
}

export async function action({request, params}) {
    const eventId = params.eventId;
    const method = request.method;
    debugger

    const response = await fetch(`http://localhost:8000/events/${eventId}`, {
        method: method ? method : 'DELETE',
    });

    if (!response.ok) {
        throw json({message: 'Could not fetch details'}, {
            status: 500
        })
    }

    return redirect('/events');
}