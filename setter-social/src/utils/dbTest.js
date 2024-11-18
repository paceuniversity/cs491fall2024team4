import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

import { v4 as uuidv4 } from 'uuid';

console.log("Test script loaded.");

export const testWrite = async (data) => {
    try {
        const userID = uuidv4().substring(0, 6);

        const add = {
            email: data.email,
            password: data.password,
            userID: userID,
        };

        const docRef = await addDoc(collection(db, 'accounts'), add);

        console.log("Object added successfully: ", docRef.id);
    } catch (error) {
        console.error("Error adding object: ", error);
    }
};
