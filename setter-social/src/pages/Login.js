import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [redirectToFeed, setRedirectToFeed] = useState(false); // State for navigation

    const handleSignIn = async(event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setRedirectToFeed(true); // Trigger navigation
        } catch(error) {
            console.log("There was an error at log in: ", error);
            alert(error.message);
        }
    };

    // Redirect if login is successful
    if (redirectToFeed) {
        return <Navigate to="/feed" replace />;
    }

    return(
        <div>
            <form onSubmit={handleSignIn}>
{/*                 <label htmlFor="userEmail">Email</label>
 */}                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

{/*                 <label htmlFor="userPassword">Password</label>
 */}                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button className="icon-button">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;