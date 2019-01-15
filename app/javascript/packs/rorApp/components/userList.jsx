import React from 'react';
import { Link } from 'react-router-dom';

class UserList extends React.Component {
  render() {
    return(
      <div>
        <h1 className="hello">I'm a user list</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default UserList
