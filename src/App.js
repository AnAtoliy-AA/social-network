import './App.css';

import DialogsConatiner from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Route path='/dialogs' render={() => <DialogsConatiner
          store={props.store} />} />
        <Route path='/profile' render={() => <Profile
          store={props.store} />} />
      </div>
    </div>
  );
}

export default App;
