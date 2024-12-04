import { auth } from "../firebase";
import { signOut } from "firebase/auth";

async function handleSignOut(params) {
    try {
        await signOut(auth);
    } catch (error) {
        console.log("There was an error logging out: ", error);
    }
}

export default handleSignOut;