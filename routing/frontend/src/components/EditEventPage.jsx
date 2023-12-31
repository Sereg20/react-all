import { useRouteLoaderData } from 'react-router-dom';
import EventForm from './EventForm';

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <EventForm event={event} method='PATCH'/>
    )
};

export default EditEventPage;