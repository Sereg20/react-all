import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './components/HomePage';
import EditEventPage from './components/EditEventPage';
import EventDetailPage, {loader as fetchEventDetails, action as deleteEvent} from './components/EventDetailPage';
import EventsPage, { loader as fetchEvents } from './components/EventsPage';
import NewEventPage from './components/NewEventPage';
import Root from './components/Root';
import RootEvents from './components/RootEvents';
import Error from './components/Error';
import { action as eventAction } from './components/EventForm';

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error />, children: [
    { index: true, element: <HomePage />},
    { path: 'events', element: <RootEvents />,children: [
      { index: true, element: <EventsPage />, loader: fetchEvents},
      { path: 'new', element: <NewEventPage />, action: eventAction},
      { path: ':eventId', id: 'event-detail', loader: fetchEventDetails, children: [
        { index: true, element: <EventDetailPage/>, action: deleteEvent},
        { path: 'edit', element: <EditEventPage/>, action: eventAction},
      ]}
    ]}
  ]},
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
