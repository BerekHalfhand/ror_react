import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <p>Header</p>
        <Link to="/">Home</Link>
        <Link to="/userList">User List</Link>
      </header>
    )
  }
}

export default Header
