import '../../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const CreateEventButton = ({ size = '', buttonType = '' }) => (
    <button className='icon-button' type={buttonType} style={{ width: size }}>
        <FontAwesomeIcon icon={faCalendarPlus} />
        Create Event
    </button>
);

export default CreateEventButton;