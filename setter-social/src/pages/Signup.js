import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [redirectToFeed, setRedirectToFeed] = useState(false);

  const handleSignUp = async(event) => {
    event.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setRedirectToFeed(true);
    } catch(error) {
        console.log("There was an error at sign up: ", error);
        alert(error.message);
    }
};

if (redirectToFeed) {
    return <Navigate to="/feed" replace />;
}

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <button className="icon-button">Sign Up</button>
    </form>
</div>
  );
};

export default Signup;
