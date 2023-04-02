import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
      color: isActive ? 'darkcyan' : 'black',
    });

    return (
      <header>
        <NavLink to="/" style={linkStyle}>
          Cards
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/forms" style={linkStyle}>
          Create Card
        </NavLink>
      </header>
    );
  }
}

export default Header;
