import '../theme.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import SecondaryHeader from '../components/headers/SecondaryHeader';
//import BackButton from '../components/buttons/BackButton';
import BasicProfileForm from '../components/forms/BasicProfileForm';
import SaveProfileButton from '../components/buttons/SaveProfileButton';
import ImageUploadButton from '../components/buttons/ImageUploadButton';

function CreateProfile() {
  const [ firstname, setFirstName ] = useState("");
  const [ lastname, setLastName ] = useState("");
  const [ displayname, setDisplayName ] = useState("");
  const [ major, setMajor ] = useState("");
  const [ classyear, setClassYear ] = useState("");
  const [ bio, setBio ] = useState("");
  const [redirectToForm, setRedirectToForm] = useState(false);
  
  const handleProfileCreate = async(event) => {
    event.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, firstname, lastname, displayname, major, classyear, bio).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
            displayName: displayname
        })
        .then(() => {
            alert("User profile made!");
            setRedirectToForm(true);
          })
        })
    } catch(error) {
        console.log("There was an error at profile creator: ", error);
        alert(error.message);
    }
};

if (redirectToForm) {
    return <Navigate to="/events" replace />;
}
    return(
        <div className='flex-center-col dark-theme'>
            <SecondaryHeader showLogo='visible' backBtn='visible' logOutBtn='visible' />
            <div>
                <h1 className='text-center'>Thanks for joining us!</h1>
                <h2 className='text-center'> Now it's time to create your profile!</h2>
            </div>
            <div>
                <h3 className='text-center'>First, let's start with some basics...</h3>
                <BasicProfileForm />
            </div>
            <div className='flex-center-col'>
                <h3 className='text-center'>Next, add a picture so that others can recognize you across the platform...</h3>
                <ImageUploadButton />
            </div>
            <div>
                <h3 className='text-center'>Ready to explore?</h3>
                <p className='text-center'>Save this info and let's go to your feed.</p>
                <SaveProfileButton size='18rem' />
            </div>
        </div>
    );
}

export default CreateProfile;