import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return(
      <section  className="col-2 py-3" id="sidebar">
        <Link to="/" className="btn btn-success d-block m-2">Home</Link>
        <Link to="/userList" className="btn btn-success d-block m-2">User List</Link>
      </section>
    )
  }
}

export default Sidebar
