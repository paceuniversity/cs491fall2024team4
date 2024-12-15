import './App.css';
import './theme.css';

import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Outlet} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import CreateProfile from './pages/CreateProfile';
import ProfileEdit from './pages/ProfileEdit';
import CreateEvent from './pages/CreateEvent';
import PageNotFound from './pages/404';
import ComingSoon from './pages/ComingSoon';
import FooterMenu from './components/footers/FooterMenu';
import ExploreEvents from './pages/ExploreEvents';
import LogIn from './pages/Login';
import AuthSignOut from './utils/authSignOut';

import { ConfigProvider } from 'antd';

import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import LogOutButton from './components/buttons/LogOutButton';

function App() {
  const [ user, setUser ] = useState(null);
  console.log("Current User: ", user);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log("Unsubscribe clicked. Current User: ", user);
      });

      return () => unsubscribe();
  }, []);

  return (
    <>
      <ConfigProvider theme={{
        token: {
            colorBgBase: '#f9fafb',
            colorTextBase: '#0d121c',
        },
      }}>
      </ConfigProvider>
      <Routes>
        {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signout' element={<AuthSignOut />} />
        {/* PROTECTED ROUTES - Redirect to Protected Content */}
          <Route path='/signup/newprofile' element={ auth.currentUser ? <CreateProfile />  : (<PageNotFound />) } />
          <Route path='/profile/edit' element={ auth.currentUser ? <ProfileEdit />  : (<PageNotFound />) } />
          <Route path='/events/newevent' element={ auth.currentUser ? <CreateEvent />  : (<PageNotFound />) } />
          <Route path='/events' element={ auth.currentUser ? <ExploreEvents /> : (<PageNotFound />) } />
        {/* PROTECTED ROUTES - Redirect to Coming Soon */} 
          <Route path='/chat' element={ auth.currentUser ? (<ComingSoon />) : (<PageNotFound />) } />
          <Route path='/groups' element={ auth.currentUser ? <ComingSoon /> : (<PageNotFound />) } />
          <Route path='/feed' element={ auth.currentUser ? <ComingSoon /> : (<PageNotFound />) } />
          <Route path='/profile' element={ auth.currentUser ? (<ComingSoon />) : (<PageNotFound />) } />
      </Routes>
      {user && (
        <div className='footer__menu-wrapper'>
          <FooterMenu />
          <LogOutButton />
        </div>
      )}
    </>
  );
}

export default App;
