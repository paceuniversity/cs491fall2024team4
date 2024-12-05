import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

async function handleSignUp(email, password, displayName) {
    try {
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

            const user = userCredential.user;

            updateProfile(user, {
                displayName: displayName
            })
            .then(() => {
                alert("User profile created!");
            })
        })
    } catch(error) {
        console.log("There was an error at account creation: ", error);
    }
}

export default handleSignUp;