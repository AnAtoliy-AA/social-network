import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import React from 'react';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
