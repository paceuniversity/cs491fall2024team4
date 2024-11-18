import '../styles/cards.css';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

console.log("Read script loaded.");

function EventRead() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async ()=> {
            const querySnapshot = await getDocs(collection(db, 'events'));
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            setData(documents);
        };
        fetchData();
    }, []);
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
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventRead;