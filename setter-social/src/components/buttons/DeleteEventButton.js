import '../../styles/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const EventDeleteButton = ({ deleteEvent, eventID, currentUserID, ownerID, size = '', buttonType = '' }) => {
    const handleDelete = () => {
        if (currentUserID === ownerID) {
            if (window.confirm('Are you sure you want to delete this event?')) {
                deleteEvent(eventID);
            }
        } else {
            alert("You do not have permission to delete this event.");
        }
    };

    return (
        currentUserID === ownerID && (
            <button
                className='icon button'
                type={buttonType}
                style={{ width: size }}
                onClick={handleDelete}
            >
                <FontAwesomeIcon icon={faTrashAlt} />
                Delete Event
            </button>
        )
    );
};

export default EventDeleteButton;