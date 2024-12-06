import { auth } from "../firebase";
import { signOut } from "firebase/auth";


async function authSignOut() {
    try {
        await signOut(auth);
        console.log('Signout clicked.');
    } catch (error) {
        console.log("There was an error logging out: ", error);
        alert("Could not sign out.");
    }  
}

export default authSignOut;