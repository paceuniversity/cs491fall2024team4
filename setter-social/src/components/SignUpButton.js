import '../styles/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SignUpButton = ({ size = '', buttonType = '' }) => (
    <button className='icon-button' type={buttonType} style={{ width: size }}>
        <FontAwesomeIcon icon={faUserPlus} />
        Create Account
    </button>
);

export default SignUpButton;