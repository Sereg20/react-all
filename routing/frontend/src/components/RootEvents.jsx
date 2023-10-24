import { Outlet } from 'react-router-dom';
import EventsNavigation from './EventsNavigation';

const RootEvents = () => {

    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
};

export default RootEvents;