import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import HeaderLogoDark from "../components/logos/HeaderLogoDark";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function LogIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [redirectToFeed, setRedirectToFeed] = useState(false);

    const handleSignIn = async(event) => {
        event.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setRedirectToFeed(true);
        } catch(error) {
            console.log("There was an error at log in: ", error);
            alert(error.message);
        }
    };

    if (redirectToFeed) {
        return <Navigate to="/events" replace />; // redirect to feed
    }

    return(
        <div className="form__wrapper dark-theme flex-center-col">
            <HeaderLogoDark />
            <h2>Account Login</h2>
            <div>
                <form className="form__container-flex form__field-dark" onSubmit={handleSignIn}>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

{/*                     <h3>You will automatically be remembered the next time you visit.</h3> */}

                    <button className="icon-button">
                        <FontAwesomeIcon icon={faRightToBracket} />Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;