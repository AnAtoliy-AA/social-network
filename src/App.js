import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  );
}

export default App;
