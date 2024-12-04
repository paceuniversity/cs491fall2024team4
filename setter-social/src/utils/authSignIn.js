//import { useState } from "react";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

async function authSignIn(email, password) {
    //const [ email, setEmail ] = useState("");
    //const [ password, setPassword ] = useState("");

/*     const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch(error) {
            console.log("There was an error: ", error);
        }
    }; */

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
        console.log("There was an error at log in: ", error);
    }

}

export default authSignIn;