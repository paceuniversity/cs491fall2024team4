import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUsers, faHouse, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const FooterMenu = () => {
    return(
        <div className='footer__menu-wrap'>
            <div id='footer__menu' className='footer__menu-container'>
                <NavLink to='/chat'>
                    <span id='chatMenuBtn'>
                        <FontAwesomeIcon icon={faComment}/>
                        <h4>GO! Chat</h4>
                    </span>
                </NavLink>
                <NavLink to='/groups'>
                    <span id='groupsMenuBtn'>
                        <FontAwesomeIcon icon={faUsers}/>
                        <h4>Groups</h4>
                    </span>
                </NavLink>
                <NavLink to='/feed'>
                    <span id='feedMenuBtn'>
                        <FontAwesomeIcon icon={faHouse}/>
                        <h4>Feed</h4>
                    </span>
                </NavLink>
                <NavLink to='/events'>
                    <span id='eventsMenuBtn'>
                        <FontAwesomeIcon icon={faCalendar}/>
                        <h4>Events</h4>
                    </span>
                </NavLink>
                <NavLink to='/profile'>
                    <span id='profileMenuBtn'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h4>Profile</h4>
                    </span>
                </NavLink>
            </div>
        </div>
    );
}

export default FooterMenu;