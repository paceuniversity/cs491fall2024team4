import './App.css';
import './theme.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './Welcome';
import Signup from './Signup';
import CreateProfile from './CreateProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/signup/newprofile' element={<CreateProfile />} />
    </Routes>
  );
}

export default App;
