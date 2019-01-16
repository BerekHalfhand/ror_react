import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Pricing from './landingPage/pricing';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1 className="hello">Hello World</h1>
        <Pricing {...this.props}/>
        <Link to="/userList">User List</Link>
      </div>
    )
  }
}

export default LandingPage
