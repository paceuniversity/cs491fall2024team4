import '../styles/buttons.css';
import '../styles/headers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRightFromBracket, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';

const PrimaryHeader = ({ screenName = 'Screen Name', backBtn = 'hidden', closeBtn = 'hidden', settingsBtn ='hidden', logOutBtn = 'hidden', showLogo = 'hidden' }) => (
    <div className='primary__header' style={{}}>
        <span>
            <FontAwesomeIcon icon={faChevronLeft} style={{visibility: backBtn}}/>
            <FontAwesomeIcon icon={faXmark} style={{visibility: closeBtn}}/>
        </span>
        <h2>{screenName}</h2>
        <span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} style={{visibility: logOutBtn}}/>
            <FontAwesomeIcon icon={faGear} style={{visibility: settingsBtn}}/>
        </span>
    </div>
);

export default PrimaryHeader;