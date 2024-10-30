import '../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const LogInButton = ({ size = '', buttonType = '' }) => (
    <button className='icon-button' type={buttonType} style={{ width: size }}>
        <FontAwesomeIcon icon={faRightToBracket} />
        Log In
    </button>
);

export default LogInButton;