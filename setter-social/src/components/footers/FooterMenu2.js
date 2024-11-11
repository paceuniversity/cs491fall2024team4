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
    const [ current, setCurrent ] = useState('feed');
    const menuNav = (e) => {
        console.log("menu clicked: ", e)
        setCurrent(e.key);
    };
    return(
        <ConfigProvider theme={{
            token: {
                colorBgBase: '#09285D',
                colorTextBase: '#f9fafb',
                colorLink: '#ffe324', // NOT WORKING
                colorInfo: '#ffe324', // NOT WORKING
                colorLinkActive: '#ffe324', // NOT WORKING
            },
          }}>
            <Flex gap='small' align='center' justify='space-evenly'>
                <Menu mode='horizontal' onClick={menuNav} selectedKeys={[current]} items={menuItems}></Menu>
            </Flex>
        </ConfigProvider>
    );
}

export default FooterMenu;