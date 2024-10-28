import './App.css';

function Welcome() {
    return(
        <div className='flex-center-col'>
            <div>
                <h3>Welcome to SetterSocial!</h3>
            </div>
            <div className='buttons-group'>
                <button className='button-primary'>Create Account</button>
                <button  className='button-primary'>Log In</button>
            </div>
        </div>
    );
}

export default Welcome;
