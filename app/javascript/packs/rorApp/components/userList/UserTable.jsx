import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import {Api} from '../../middleware/api'

class UserTable extends React.Component {
  constructor (props) {
    super(props);
    this.renderPopulatedTable = this.renderPopulatedTable.bind(this);

    this.state = {
      users: props.users
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  handleClickEdit () {
    alert('tada!');
  }

  renderEmptyTable () {
    return (
      <tbody>
        <tr>
          <td colSpan="6">No people found.</td>
        </tr>
      </tbody>
    );
  }

  renderPopulatedTable () {
    console.log('renderPopulatedTable');
    console.dir(this.state);

    var list = this.state.users.map(function(user) {
      return (
        <tr key={user._id.$oid}>
          <td>{user.username}</td>
          <td>{user.fullname}</td>
          <td>{user.password}</td>
          <td>{user.email}</td>
          <td>
            <a className="btn btn-default" id={user._id.$oid} onClick={this.handleClickEdit} >Edit</a>
          </td>
          <td>
            <a className="btn btn-danger">Delete</a>
          </td>
        </tr>
      );
    }, this);

    return (
      <tbody>
        {list}
      </tbody>
    );

  }
  //People: {this.props.people}
  render () {
    return (
      <React.Fragment>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Full Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>

            {!this.state.users ? this.renderEmptyTable() : this.renderPopulatedTable()}

        </table>
      </React.Fragment>
    );
  }
}

UserTable.propTypes = {
  people: PropTypes.string
};
export default UserTable
