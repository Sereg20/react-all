import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head';

function NewMeetup() {
    const router = useRouter();

    async function onAddMeetup(enteredData) {
        const response  = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        router.push('/');
        
    }

    return (
        <>
            <Head>
                <title>Add a new Meetup</title>
                <meta name='description' content='Add your own meetup'/>
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetup}/>
        </>
    );
}

export default NewMeetup;