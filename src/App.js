import './App.css';

import { Route, withRouter } from 'react-router-dom';

import React, { Component } from 'react';

import HeaderContainer from './components/Header/HeaderContainer'; import { compose } from 'redux';
import Navbar from './components/Navbar/Navbar'; import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader'; import { initializeApp } from './redux/app-reducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

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
            render={withSuspense(DialogsContainer)}
          />
          <Route
            path='/profile/:userId?'
            render={withSuspense(ProfileContainer)}
          />
          <Route
            path='/users'
            render={withSuspense(UsersContainer)}
          />
          <Route
            path='/login'
            render={withSuspense(LoginPage)}
          />
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
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {

  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;
