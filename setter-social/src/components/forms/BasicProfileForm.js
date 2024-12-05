import { useState } from 'react';
import '../../styles/forms.css';

import { profileWrite } from '../../utils/profileWrite';
import { UserState } from './authUserState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

console.log(UserState.user);

const BasicProfileForm = () => {
    const [ class, setClass ] = useState("");
    const [ firstname, setFirstName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ major, setMajor ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ bio, setBio ] = useState("");

    const [ pid, setPID ] = useState("");

    const profileData = {
        bio: bio,
        class: class,
        firstname: firstname,
        lastname: lastname,
        major: major,
        pid: pid, //need to get from currentUser
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
                <div style={{ gridColumn: 'span 3' }}>
                    <div className='form__field'>
                        <label htmlFor="name">Display Name</label>
                        <input id="addDisplayName" type="text" name="name"></input>
                    </div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                <div className='form__field'>
                    <label htmlFor="major">Major</label>
                    <input id="addMajor" type="text" name="major" className='major__input'></input>
                </div>
                </div>
                <div style={{ gridColumn: '3' }}>
                <div className='form__field'>
                    <label htmlFor="class">Class Year</label>
                    <input id="addClass" type="text" name="class" className='class__input'></input>
                </div>
                </div>
                <div style={{ gridColumn: 'span 3' }}>
                <div className='form__field'>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="addBio" type="text" name="bio"></textarea>
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