import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.linkActive : ''}`;

  return (
    <header className={styles.header}>
      <NavLink to="/" className={linkStyle}>
        Cards
      </NavLink>
      <NavLink to="/about" className={linkStyle}>
        About
      </NavLink>
      <NavLink to="/forms" className={linkStyle}>
        Create Card
      </NavLink>
    </header>
  );
};

export default Header;
