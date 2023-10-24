import { useRouteError, } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    debugger
    let title = 'Invalid Route';
    let message = 'Mesage invaid route';

    if (error.status === 500) {
        title='Invalid backend';
        message = error.data.message
    }
    return (
        <>
            <h1>{title}</h1>
            <p>{message}</p>
        </>
    );
};

export default Error;