import { useState } from 'react';
import '../../styles/forms.css';

import { profileWrite } from '../../utils/profileWrite';
import { UserState } from '../../utils/authUserState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

console.log(UserState.user);

const BasicProfileForm = () => {
    const [ classyear, setClassYear ] = useState("");
    const [ firstname, setFirstName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ major, setMajor ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ bio, setBio ] = useState("");

    //const [ pid, setPID ] = useState("");

    const profileData = {
        bio: bio,
        classyear: classyear,
        firstname: firstname,
        lastname: lastname,
        major: major,
        // pid: pid, //need to get from currentUser
        username: username,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await profileWrite(profileData);
    };

    return(
        <div className='form__wrapper'>
            <h2>Basic Profile</h2>
            <form className='form__container-grid'>
            <   div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label>First Name</label>
                        <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                </div>
                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label>Last Name</label>
                        <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                </div>
                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label>Display Name</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                <div className='form__field'>
                    <label>Major</label>
                    <input type="text" value={major} onChange={(e) => setMajor(e.target.value)}></input>
                </div>
                </div>
                <div style={{ gridColumn: '3' }}>
                <div className='form__field'>
                    <label>Class Year</label>
                    <input type="text" value={classyear} onChange={(e) => setClassYear(e.target.value)}></input>
                </div>
                </div>
                <div style={{ gridColumn: 'span 3' }}>
                <div className='form__field'>
                    <label>Bio</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                </div>

                <button className='icon-button' onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faFloppyDisk} /> Save Profile
                </button>
            </form>
        </div>
    );
}

export default BasicProfileForm;