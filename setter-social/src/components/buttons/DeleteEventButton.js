import '../../styles/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const EventDeleteButton = ({ size = '', buttonType = '' }) => (
    <button className='icon button' type={buttonType} style={{ width: size}}>
        <FontAwesomeIcon icon={faTrashAlt} />
        Delete Event
    </button>
);

export default EventDeleteButton;