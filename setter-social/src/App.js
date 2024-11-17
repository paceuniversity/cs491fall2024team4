import './App.css';
import './theme.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import CreateProfile from './pages/CreateProfile';
import ProfileEdit from './pages/ProfileEdit';
import EventCreator from './pages/EventCreator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/signup/newprofile' element={<CreateProfile />} />
      <Route path='/profile/edit' element={<ProfileEdit />} />
      <Route path='/eventcreator' element={<EventCreator />} />
    </Routes>
  );
}

export default App;
