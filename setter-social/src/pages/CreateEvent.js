import '../theme.css';

import FooterMenu from '../components/footers/FooterMenu';
import CreateEventForm from '../components/forms/CreateEventForm';

function CreateEvent() {
    return(
        <div className='flex-center-col light-theme'>
            <CreateEventForm />
{/*             <FooterMenu /> */}
        </div>
    );
}

export default CreateEvent;