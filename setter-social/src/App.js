import './App.css';
import './theme.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import CreateProfile from './pages/CreateProfile';
import ProfileEdit from './pages/ProfileEdit';
import CreateEvent from './pages/CreateEvent';
import PageNotFound from './pages/404';
import FooterMenu from './components/footers/FooterMenu';

import { ConfigProvider } from 'antd';


function App() {
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
          <Route path='/profile' element={<PageNotFound />} />
          <Route path='/chat' element={<PageNotFound />} />
          <Route path='/groups' element={<PageNotFound />} />
          <Route path='/feed' element={<PageNotFound />} />
          <Route path='/events' element={<PageNotFound />} />
      </Routes>
      
      <FooterMenu />
    </>

  );
}

export default App;
