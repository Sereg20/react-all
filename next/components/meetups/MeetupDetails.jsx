import cl from './MeetupDetails.module.css';

function MeetupDetails(props) {

    return(
        <section className={cl.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    ); 
}

export default MeetupDetails;