import '../theme.css';
import '../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ComingSoon() {
    return(
        <div className='light-theme'>
            <div className='flex-center-justify text-center'>
                <h1>We're Working On It!</h1>
                <h3>This page is coming soon.</h3>
                <Link to='/events'>
                <button className='icon-button'>
                    <FontAwesomeIcon icon={faArrowLeftLong} />Go Back
                </button>
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;