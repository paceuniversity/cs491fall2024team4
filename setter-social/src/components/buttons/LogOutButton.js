import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function LogOutButton() {
    const handleSignOut = async () => {
        try {
        await signOut(auth);
        } catch (error) {
        console.log("There was an error logging out: ", error);
        }  
    };
    return (
        <button onClick={handleSignOut} className="icon-button">
            <FontAwesomeIcon icon={faRightFromBracket} />Sign Out
        </button>
    );
}

export default LogOutButton;