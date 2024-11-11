import '../../styles/text.css';
import '../../styles/buttons.css';
import '../../styles/footer.css';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUsers, faHouse, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

import { ConfigProvider, Flex, Menu } from 'antd';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        label: (
            <Link to='/chat'>GO! Chat</Link>
        ),
        key: 'chat',
        icon: (
        <FontAwesomeIcon icon={faComment} />
        ),
        style: (
            {display: 'flex', flexDirection: 'column', margin: '0 auto'}
        ),
    },
    {
        label: (
            <Link to='/groups'>Groups</Link>
        ),
        key: 'groups',
        icon: (
        <FontAwesomeIcon icon={faUsers} />
        ),
    },
    {
        label: (
            <Link to='/feed'>Feed</Link>
        ),
        key: 'feed',
        icon: (
        <FontAwesomeIcon icon={faHouse} />
        ),
    },
    {
        label: (
            <Link to='/events'>Events</Link>
        ),
        key: 'events',
        icon: (
        <FontAwesomeIcon icon={faCalendar} />
        ),
    },
    {
        label: (
            <Link to='/profile'>Profile</Link>
        ),
        key: 'profile',
        icon: (
        <FontAwesomeIcon icon={faUser} />
        ),
    },
];

const FooterMenu = () => {
    const [ active, setActive ] = useState(null);
    const menuNav = (e) => {
        console.log("menu clicked: ", e);
        //className={active === e.id ? 'active' : ''}
        e.className += ' :active';
        setActive(e.id);
    };
    return(
        <div className='footer__menu-wrap'>
            <div className='footer__menu-container'>
                <Link to='/chat'>
                    <button id='chat' className='footer__menu-button'>
                        <FontAwesomeIcon icon={faComment}/>
                        GO! Chat
                    </button>
                </Link>
                <Link to='/groups'>
                    <button id='groups' className='footer__menu-button'>
                        <FontAwesomeIcon icon={faUsers}/>
                        Groups
                    </button>
                </Link>
                <Link to='/feed'>
                    <button id='feed' className='footer__menu-button'>
                        <FontAwesomeIcon icon={faHouse}/>
                        Feed
                    </button>
                </Link>
                <Link to='/events'>
                    <button id='events' className='footer__menu-button'>
                        <FontAwesomeIcon icon={faCalendar}/>
                        Events
                    </button>
                </Link>
                <Link>
                    <button id='profile' className='footer__menu-button' onClick={menuNav}>
                        <FontAwesomeIcon icon={faUser}/>
                        Profile
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FooterMenu;