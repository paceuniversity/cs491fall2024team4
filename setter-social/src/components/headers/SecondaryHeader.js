import '../../styles/buttons.css';
import '../../styles/headers.css';

import wmDark from '../../assets/wordmark-dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRightFromBracket, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';

const SecondaryHeader = ({ screenName = '', backBtn = 'hidden', closeBtn = 'hidden', settingsBtn ='hidden', logOutBtn = 'hidden', showLogo = 'hidden' }) => (
    <div className='secondary__header' style={{ color: 'var(--chalk__white)'}}>
        <i>
            <FontAwesomeIcon icon={faChevronLeft} className='icon-left' style={{visibility: backBtn}}/>
            <FontAwesomeIcon icon={faXmark} className='icon-left' style={{visibility: closeBtn}}/>
        </i>
        <span>
            <h2 style={{ margin: '0 auto', position: 'absolute' }}>{screenName}</h2>
            <img alt='Blue SetterSocial logo' src={wmDark} style={{ visibility: showLogo, margin: '0 auto' }} />
        </span>
        <i>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon-right' style={{visibility: logOutBtn}}/>
            <FontAwesomeIcon icon={faGear} className='icon-right' style={{visibility: settingsBtn}}/>
        </i>
    </div>
);

export default SecondaryHeader;