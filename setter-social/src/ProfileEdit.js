import './App.css';
import profile from './BlankProfile.jpg';

function ProfileEdit() {
    return (
        <div className = "Profile Edit">
          <header className = "Profile-Editor">
            <p>
              Profile Editor <br />
            </p>
            <img src={profile} className = "profile-logo" alt = "logo" />
            <p>
            <br /> Basic Profile <br />
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <House />
        </div>
        
      );


}