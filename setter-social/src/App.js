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
import EventCreator from './pages/EventCreator';
import ExploreEvents from './pages/ExploreEvents';
import LogIn from './pages/Login';
import AuthSignOut from './utils/authSignOut';

import { ConfigProvider } from 'antd';

import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

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
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/signup/newprofile' element={<CreateProfile />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/events/newevent' element={<CreateEvent />} />
          <Route path='/profile' element={<ComingSoon />} />
          <Route path='/chat' element={ auth.currentUser ? (<ComingSoon />) : (<PageNotFound />) } />
          <Route path='/groups' element={<ComingSoon />} />
          <Route path='/feed' element={<ComingSoon />} />
          <Route path='/events' element={<ExploreEvents />} />
          <Route path='/eventcreator' element={<EventCreator />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signout' element={<AuthSignOut />} />
      </Routes>
      <div className='footer__menu-wrapper'>
        <FooterMenu />
      </div>
    </>
  );
}

export default App;
