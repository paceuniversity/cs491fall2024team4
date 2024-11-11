import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUsers, faHouse, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

import { Menu } from 'antd';

const FooterMenu = () => {
    return(
        <div className='footer__menu-container'>
            <Menu mode='horizontal'>
                <Menu.Item key='chat' icon={<FontAwesomeIcon icon={faComment} />}>Chat</Menu.Item>
                <Menu.Item key='groups' icon={<FontAwesomeIcon icon={faUsers} />}>Groups</Menu.Item>
                <Menu.Item key='feed' icon={<FontAwesomeIcon icon={faHouse} />}>Feed</Menu.Item>
                <Menu.Item key='events' icon={<FontAwesomeIcon icon={faCalendar} />}>Events</Menu.Item>
                <Menu.Item key='profile' icon={<FontAwesomeIcon icon={faUser} />}>Profile</Menu.Item>
            </Menu>
        </div>
    );
}

export default FooterMenu;