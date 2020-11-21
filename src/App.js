import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
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
        <Route path='/dialogs' render={() => <Dialogs
          state={props.state.dialogsPage}
          dispatch={props.dispatch} />} />
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}

export default App;
