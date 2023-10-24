import { useLoaderData, json, } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {

  const response = await fetch('http://localhost:8000/events');

  if (!response.ok) {
    throw json({message: 'No events found!'}, {
      status: 500
    })
  } else {
    return response;
  }
}