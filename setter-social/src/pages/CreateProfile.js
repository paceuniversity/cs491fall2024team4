import '../theme.css';

import SecondaryHeader from '../components/headers/SecondaryHeader';
//import BackButton from '../components/buttons/BackButton';
import BasicProfileForm from '../components/forms/BasicProfileForm';
import SaveProfileButton from '../components/buttons/SaveProfileButton';
import ImageUploadButton from '../components/buttons/ImageUploadButton';

function CreateProfile() {
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
                <ImageUploadButton size='18rem' buttonType='button' />
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