import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    margin: '10px',
    width: '100px'
  }
  return (
    <div className='navbar'>
      <NavLink to='/' exact style={link}>Home</NavLink>
      <NavLink to='/movies' exact style={link}>Movies</NavLink>
      <NavLink to='/directors' exact style={link}>Directors</NavLink>
      <NavLink to='/actors' exact style={link}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
