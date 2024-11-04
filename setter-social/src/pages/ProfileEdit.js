import '../App.css';
import profileimg from '../assets/user-solid.svg';
import profileimgchange from '../assets/pen-solid.svg';
import SecondaryHeader from '../components/headers/SecondaryHeader';
import '../theme.css';
import '../styles/editprofile.css';
import AddSocial from '../components/forms/AddSocialMediaForm';
import BasicProfileForm from '../components/forms/BasicProfileForm';
import SaveProfileButton from '../components/buttons/SaveProfileButton';
import WordMarkDark from '../components/logos/WordmarkDark';


function ProfileEdit() {
    return (
        <div className='flex-center-col dark-theme'>
        <SecondaryHeader screenName='Profile Editor' backBtn='visible' logOutBtn='visible'/><br></br>
            <div className="image-frame">
                <img src={profileimg} className="profile-logo" alt="logo" style={{ width: '250px', height: '250px' }} />
                <img src={profileimgchange} className="profile-logo" alt="logo" style={{ width: '75px', height: '75px' }} />
            </div>
            <div className='flex-center-col dark-theme'>
                <BasicProfileForm />
                <AddSocial /> <br></br> <br></br> <br></br>
                <SaveProfileButton size='18rem' />
            </div>
            <div className='flex-center-col'>
                <br></br> <br></br><br></br> <br></br> <br></br><WordMarkDark size='20rem' />
            </div>
        </div>
      );


}

export default ProfileEdit;