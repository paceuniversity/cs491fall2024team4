import './theme.css';
import './App.css';

function Welcome() {
    return(
        <div className='flex-center-col'>
            <div className='text-center'>
                <h1>Welcome to SetterSocial!</h1>
                <h2>Welcome to SetterSocial!</h2>
                <h3>Welcome to SetterSocial!</h3>
                <h4>Welcome to SetterSocial!</h4>
            </div>
            <div className='buttons-group'>
                <button className='button__primary'>Create Account</button>
                <button  className='button__primary'>Log In</button>
            </div>
        </div>
    );
}

export default Welcome;
