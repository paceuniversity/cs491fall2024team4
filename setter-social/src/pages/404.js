import '../theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return(
        <div className='light-theme'>
        <div className='flex-center-justify text-center'>
            <h1>Oh no!</h1>
            <h3>The page you were looking for could not be found.</h3>
            <Link to='/events'>
            <button className='icon-button'>
                <FontAwesomeIcon icon={faArrowLeftLong} />Go Back
            </button>
            </Link>
        </div>
    </div>
    );
}