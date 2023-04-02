import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export class Header extends Component {
  render() {
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
      color: isActive ? 'darkcyan' : 'black',
    });

    return (
      <header className={styles.header}>
        <NavLink to="/" style={linkStyle} className={styles.link}>
          Cards
        </NavLink>
        <NavLink to="/about" style={linkStyle} className={styles.link}>
          About
        </NavLink>
        <NavLink to="/forms" style={linkStyle} className={styles.link}>
          Create Card
        </NavLink>
      </header>
    );
  }
}

export default Header;
