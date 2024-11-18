import '../theme.css';
import '../styles/text.css';

import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogoDark from '../components/logos/HeaderLogoDark';
import SignUpButton from '../components/buttons/SignUpButton';
import LogInButton from '../components/buttons/LogInButton';

import { TestForm } from '../components/forms/dbTestForm';

function Welcome() {
    return(
        <div className='flex-center-col dark-theme'>
            <HeaderLogoDark />
            <div>
                <h2 className='text-center'>Welcome to SetterSocial!</h2>
                <p className='text-justify mission__para'>
                    <strong>SetterSocial</strong> was created by a team of students at Pace University as part of a semester-long course project. The intention behind <strong>SetterSocial</strong> is to help bring university students together, in real life. With the use of social media and AI tools, <strong>SetterSocial</strong> aims to narrow the gap between university students and their unfound community.</p>
            </div>
            <div className='buttons__group'>
                <Link to="/signup">
                    <SignUpButton size='18rem' />
                </Link>
                <Link to=''>
                    <LogInButton  size='18rem' />
                </Link>
            </div>
{/*             <TestForm /> */}
        </div>
    );
}

export default Welcome;
