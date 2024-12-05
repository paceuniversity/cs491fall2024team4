import '../../styles/buttons.css';
import '../../styles/headers.css';

import wmLight from '../../assets/wordmark-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRightFromBracket, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';

import authSignOut from '../../utils/authSignOut';

const PrimaryHeader = ({ screenName = '', backBtn = 'hidden', closeBtn = 'hidden', settingsBtn ='hidden', logOutBtn = 'hidden', showLogo = 'hidden' }) => (
    <div className='primary__header'>
        <span>
            <button className='icon-left' style={{visibility: backBtn}}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className='icon-left' style={{visibility: closeBtn}}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </span>

        <span>
            <h2>{screenName}</h2>
            <img alt='Blue SetterSocial logo' src={wmLight} style={{ visibility: showLogo }} />
        </span>

        <span>
            <button className='icon-right' style={{visibility: logOutBtn}}>
                <FontAwesomeIcon onClick={authSignOut} icon={faArrowRightFromBracket}/>
            </button>

            <button className='icon-right' style={{visibility: settingsBtn}}>
                <FontAwesomeIcon icon={faGear}/>
            </button>
        </span>
    </div>
);

export default PrimaryHeader;