import '../styles/cards.css';

import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import EventDeleteButton from '../components/buttons/DeleteEventButton';

console.log("Read script loaded.");

function EventRead() {
    const [data, setData] = useState([]);
    const [currentUserID, setCurrentUserID] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'events'));
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            setData(documents);
        };
        fetchData();

        setCurrentUserID('currentUserIDFromAuth');
    }, []);

    const deleteEvent = async (eventID) => {
        try {
            await deleteDoc(doc(db, 'events', eventID));
            console.log('Event deleted!');
            setData((prevData) => prevData.filter((event) => event.id !== eventID));
        } catch (error) {
            console.error("Error deleting event: ", error);
        }
    };

    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className='event__card-container'>
                    <div className='event'>
                        <h1>{item.name}</h1>
                        <h3>{item.description}</h3>
                        <p>{item.location}</p>
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                        <button className='icon-button-small'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            RSVP
                        </button>
                        <small>people going</small>
                        <EventDeleteButton
                            deleteEvent={deleteEvent}
                            eventID={item.id}
                            currentUserID={currentUserID}
                            ownerID={item.userID}
                            size="auto"
                            buttonType="button"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventRead;