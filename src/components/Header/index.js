import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img  className={styles.logo} src="/static/images/logo.png" alt="logo" />
      </Link>
      {/* <img src={logo} alt="logo" /> */}
      {pathname ==="/login" ? 
      <Link to="/sineup">SignUp</Link> : 
      <Link to="/login">Login</Link>  }
    </header>
  );
};

export default Header;
