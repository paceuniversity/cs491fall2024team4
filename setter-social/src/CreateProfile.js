import './theme.css';

import PrimaryHeader from './components/PrimaryHeader';

function CreateProfile() {
    return(
        <div>
            <PrimaryHeader screenName='Create Profile' showLogo='visible' closeBtn='visible' settingsBtn='visible' />
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