import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
// import {Api} from '../../middleware/api'

// Components
import UserItem from './userTable/userItem';

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

    var list = this.state.users.map(function(user) {
      let id = user._id.$oid;

      return (
        <UserItem key={id} id={id} user={user}
         handleDelete={this.props.handleDelete} />
      );
    }, this);

    return (
      <React.Fragment>
        <tbody>
          {list}
        </tbody>
      </React.Fragment>
    );

    //<a className="btn btn-default" onClick={this.checkState.bind(this)} >Check State</a>
  }

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
  users: PropTypes.array
};
export default UserTable
