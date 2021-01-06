import './App.css';

import { Route, withRouter } from 'react-router-dom';

import { Component } from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/common/Preloader/Preloader';
import ProfileContainer from './components/Profile/ProfileContainer';
import React from 'react';
import UsersContainer from './components/Users/UsersContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper__content'>
          <Route
            path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route
            path='/users'
            render={() => <UsersContainer />} />
          <Route
            path='/login'
            render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp}))(App);

const MainApp = (props) => {

 return <BrowserRouter>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </BrowserRouter>
}

export default MainApp;