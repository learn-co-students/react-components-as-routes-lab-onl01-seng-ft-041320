import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink style={link} to="/">Home</NavLink>
        <NavLink style={link} to="/movies">Movies</NavLink>
        <NavLink style={link} to="/actors">Actors</NavLink>
        <NavLink style={link} to="/directors">Directors</NavLink>
      </div>
    );
  }
};

export default NavBar;
