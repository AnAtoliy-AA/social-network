import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <a href="/news">News</a>
            </div>
            <div className={styles.item}>
                <a href="music">Music</a>
            </div>
            <div className={styles.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;