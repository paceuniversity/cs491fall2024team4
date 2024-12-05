import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

import { UserState } from './authUserState';

console.log("Profile writing script loaded.");
console.log(UserState.user);

export const profileWrite = async (data) => {
    try {
        const add = {
            bio: data.bio,
            class: data.class,
            firstname: data.firstname,
            lastname: data.lastname,
            major: data.major,
            pid: data.pid, //need to get from currentUser
            user: data.username,
        };

        const docRef = await addDoc(collection(db, 'profiles'), add);

        console.log("Profile data added successfully: ", docRef.id);
    } catch (error) {
        console.error("Error adding profile data: ", error);
    }
};