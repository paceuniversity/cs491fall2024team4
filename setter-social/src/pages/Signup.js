import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import HeaderLogoDark from "../components/logos/HeaderLogoDark";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [ email, setEmail ] = useState("");
  const [ username, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");

  const [redirectToForm, setRedirectToForm] = useState(false);

  const handleSignUp = async(event) => {
    event.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

          const user = userCredential.user;

          updateProfile(user, {
              displayName: username
          })
          .then(() => {
              alert("User profile created!");
              setRedirectToForm(true);
          })
        })
    } catch(error) {
        console.log("There was an error at sign up: ", error);
        alert(error.message);
    }
};

if (redirectToForm) {
    return <Navigate to="/signup/newprofile" replace />;
}

  return (
    <div className="form__wrapper dark-theme flex-center-col">
      <HeaderLogoDark />
      <h2>Create New Account</h2>
      <div>
        <form className="form__container-flex form__field" onSubmit={handleSignUp}>
{/*           <label>First Name</label>
          <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}></input>

          <label>Last Name</label>
          <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}></input> */}

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label>Display Name</label>
          <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}></input>

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

          <button className="icon-button">
            <FontAwesomeIcon icon={faUserPlus} /> Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
