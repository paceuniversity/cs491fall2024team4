import { useState } from "react";

import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSignIn = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            <Navigate to="/feed" />
        } catch(error) {
            error.preventDefault();
            console.log("There was an error at log in: ", error);
            alert("Error: ", error);
        }
    };

}

export default SignIn;