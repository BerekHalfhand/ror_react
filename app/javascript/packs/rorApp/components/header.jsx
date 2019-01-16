import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <Link to="/" className="btn btn-default">Home</Link>
        <Link to="/userList" className="btn btn-default">User List</Link>
      </header>
    )
  }
}

export default Header
