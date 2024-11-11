import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/footer.css';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUsers, faHouse, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

import { Menu } from 'antd';

const menuItems = [
    {
        label: 'GO! Chat',
        key: 'chat',
        icon: <FontAwesomeIcon icon={faComment} />,
    },
    {
        label: 'Groups',
        key: 'groups',
        icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
        label: 'Feed',
        key: 'feed',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        label: 'Events',
        key: 'events',
        icon: <FontAwesomeIcon icon={faCalendar} />,
    },
    {
        label: 'Profile',
        key: 'profile',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
];

const FooterMenu = () => {
    const [ current, setCurrent ] = useState('feed');
    const menuNav = (e) => {
        console.log("menu clicked: ", e)
        setCurrent(e.key);
    };
    return(
        <div className='footer__menu-container'>
            <Menu mode='horizontal' onClick={menuNav} selectedKeys={[current]} items={menuItems}>
            </Menu>
        </div>
    );
}

export default FooterMenu;