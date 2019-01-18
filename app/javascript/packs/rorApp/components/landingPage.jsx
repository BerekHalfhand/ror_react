import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  handleClick() {
    console.log(this.testFunction());
  }

  testFunction(callback) {
    setTimeout(() => {
      console.log(1);

      if (!callback)
        this.testFunction(this.testCallback);
      else
        callback();

      return 2;
    }, 1000);
  }

  testCallback() {
    console.log(3);
  }

  render() {
    return(
      <React.Fragment>
        <h1>The Landing Page</h1>
        <button type="button" className="btn btn-light mb-2 d-block" onClick={this.handleClick.bind(this)}>Test Func</button>
        <Link to="/userList">User List</Link>
      </React.Fragment>
    )
  }
}

export default LandingPage
