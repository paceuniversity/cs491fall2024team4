import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Signup from './Signup';
import './App.css';
import './theme.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
