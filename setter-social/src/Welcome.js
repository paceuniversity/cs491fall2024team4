import './theme.css';
import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogoDark from './components/HeaderLogoDark';
import PrimaryButton from './components/PrimaryButton';

function Welcome() {
    return(
        <div className='flex-center-col'>
            <HeaderLogoDark />
            <div className='text-center'>
                <h1>Welcome to SetterSocial!</h1>
                <h2>Welcome to SetterSocial!</h2>
                <h3>Welcome to SetterSocial!</h3>
                <h4>Welcome to SetterSocial!</h4>
            </div>
            <div className='buttons-group'>
                <PrimaryButton buttonLabel='Test' />
                <Link to="/signup">
                    <button className='button__primary'>Create Account</button>
                </Link>
                <button className='button__primary'>Log In</button>
            </div>
        </div>
    );
}

export default Welcome;
