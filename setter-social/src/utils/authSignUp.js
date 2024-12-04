import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

async function handleSignUp(email, password, username) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {
        console.log("There was an error at account creation: ", error);
    }
}

export default handleSignUp;