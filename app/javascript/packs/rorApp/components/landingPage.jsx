import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1 className="hello">Hello World</h1>
        <Pitch {...this.props} />
        <Pricing {...this.props}/>
        <Link to="/userList">User List</Link>
      </div>
    )
  }
}

export default LandingPage
