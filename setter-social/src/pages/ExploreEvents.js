import '../theme.css';

import EventRead from '../utils/readEvents';
import PrimaryHeader from '../components/headers/PrimaryHeader';

function ExploreEvents() {
    return(
        <div>
            <PrimaryHeader screenName='Explore Events' />
            <div className='explore-wrapper'>
                <EventRead />
            </div>
        </div>
    );
}

export default ExploreEvents;