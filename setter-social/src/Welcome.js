import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Welcome() {
    return(
        <div className='flex-center-col'>
            <div>
                <h3>Welcome to SetterSocial!</h3>
            </div>
            <div className='buttons-group'>
                <Link to="/signup">
                    <button className='button-primary'>Create Account</button>
                </Link>
                <button className='button-primary'>Log In</button>
            </div>
        </div>
    );
}

export default Welcome;
