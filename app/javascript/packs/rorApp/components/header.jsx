import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header id="header" className="col-12 py-3">
        <Link to="/" className="btn btn-warning m-2">Home</Link>
        <Link to="/userList" className="btn btn-warning m-2">User List</Link>
      </header>
    )
  }
}

export default Header
