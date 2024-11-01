import '../theme.css';

import PrimaryHeader from '../components/headers/PrimaryHeader';
import BackButton from '../components/buttons/BackButton';
import AddSocial from '../components/forms/AddSocialMediaForm';
import BasicProfileForm from '../components/forms/BasicProfileForm';

function CreateProfile() {
    return(
        <div className='flex-center-col'>
            <PrimaryHeader screenName='Create Profile' backBtn='visible' logOutBtn='visible' />
            <BasicProfileForm />
            <AddSocial />
            {/* <BackButton /> */}
{/*             <div>
            Create Profile Screen
            header with screen name
            avatar with edit button "add a profile picture"
            basic profile form, dispaly name, major, bio, class
            save profile "save and continue"
            wordmark on footer
            </div> */}
        </div>
    );
}

export default CreateProfile;