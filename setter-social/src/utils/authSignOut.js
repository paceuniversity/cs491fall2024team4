import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function AuthSignOut() {
    const handleSignOut = async () => {
        try {
        await signOut(auth);
        } catch (error) {
        console.log("There was an error logging out: ", error);
        }  
    };
    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
}

export default AuthSignOut;