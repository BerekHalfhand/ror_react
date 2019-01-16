import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1 className="hello">The Landing Page</h1>
        
        <Link to="/userList">User List</Link>
      </div>
    )
  }
}

export default LandingPage
