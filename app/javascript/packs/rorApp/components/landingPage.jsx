import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1>The Landing Page</h1>

        <Link to="/userList">User List</Link>
      </React.Fragment>
    )
  }
}

export default LandingPage
