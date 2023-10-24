import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';

function MeetupDetailsPage({meetupData}) {

    return (
        <>
            <Head>
                <title>{`${meetupData.title} Meetup Details`}</title>
                <meta name='description' content='Browse a Meetup details'/>
                <MeetupDetails 
                    image={meetupData.image}
                    title={meetupData.title}
                    address={meetupData.address}
                    description={meetupData.description}/>
            </Head>
        </>
    );
}

export default MeetupDetailsPage;

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://seregshnitko00:1_ser_1_ser_1@cluster0.dlarhyc.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetupIds = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetupIds.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    };
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://seregshnitko00:1_ser_1_ser_1@cluster0.dlarhyc.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});

    client.close();

    return {
        props: {
            meetupData: {
                title: meetup.title,
                description: meetup.description,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }
        }
    }
}