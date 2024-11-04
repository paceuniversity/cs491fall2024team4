import '../../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const SaveProfileButton = ({ size = '' }) => (
    <button className='icon-button' type='submit' style={{ width: size }}>
        <FontAwesomeIcon icon={faFloppyDisk} />
        Save Profile
    </button>
);

export default SaveProfileButton;