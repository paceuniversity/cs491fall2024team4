import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

//import { v4 as uuidv4 } from 'uuid';

console.log("Writing script loaded.");

export const eventWrite = async (data) => {
    try {
        //const userID = uuidv4().substring(0, 6);

        const add = {
            name: data.name,
            location: data.location,
            time: data.time,
            date: data.date,
            description: data.description,
        };

        const docRef = await addDoc(collection(db, 'events'), add);

        console.log("Event added successfully: ", docRef.id);
    } catch (error) {
        console.error("Error adding event: ", error);
    }
};