import '../App.css';
import profileimg from '../assets/blank-profile.jpg';
import profileimgchange from '../assets/pen-solid.svg';
import PrimaryHeader from '../components/headers/PrimaryHeader';
import '../theme.css';
import '../styles/editprofile.css';
import AddSocial from '../components/forms/AddSocialMediaForm';
import BasicProfileForm from '../components/forms/BasicProfileForm';

function ProfileEdit() {
    return (
        <div className = 'flex-center-col'>
          <PrimaryHeader screenName='Profile Editor' backBtn='visible'/><br></br>
          <div className = "image-frame">
            <img src={profileimg} className = "profile-logo" alt = "logo"/>
            <img src={profileimgchange} className = "profile-logo" alt = "logo"   style={{ width: '75px', height: '75px' }}/>
          </div>
            <BasicProfileForm />
            <AddSocial />
        </div>
        
      );


}

export default ProfileEdit;