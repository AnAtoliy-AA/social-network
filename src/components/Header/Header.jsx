import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg"
        alt="logo"></img>

      <div className={classes.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;