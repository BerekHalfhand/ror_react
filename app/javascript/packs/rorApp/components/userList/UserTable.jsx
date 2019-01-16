import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import {Api} from '../../middleware/api'

class UserTable extends React.Component {
  constructor (props) {
    super(props);
    this.renderPopulatedTable = this.renderPopulatedTable.bind(this);

    this.state = {
      users: props.users,
      editable: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  checkState() {
    console.dir(this.state);
  }

  handleChange( id, type) {
    console.log('id: ', id);
    console.log('type: ', type);
  }

  handleClickEdit (id, user, e) {
    console.dir(e.target);
    // let id = e.target.attributes.id.value.substr(5);
    // console.dir(user);
    if (!this.state.editable[id])
      this.setState({ editable: {[id]: true} });
    else
      this.setState({ editable: {[id]: false} }) && Api.editUser(id, user);
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
      let id = user._id.$oid;
      let username = this.state.editable[id] ? <input type='text' defaultValue={user.username} onChange={this.handleChange.bind(this, id, 'username')}/> : <p>{user.username}</p>;
      let fullname = this.state.editable[id] ? <input type='text' defaultValue={user.fullname} onChange={this.handleChange} /> : <p>{user.fullname}</p>;
      let password = this.state.editable[id] ? <input type='text' defaultValue={user.password} onChange={this.handleChange} /> : <p>{user.password}</p>;
      let email    = this.state.editable[id] ? <input type='text' defaultValue={user.email} onChange={this.handleChange} />    : <p>{user.email}</p>;
      return (
        <tr key={id}>
          <td>{username}</td>
          <td>{fullname}</td>
          <td>{password}</td>
          <td>{email}</td>
          <td>
            <a className="btn btn-default" onClick={this.handleClickEdit.bind(this, id, user)}>{this.state.editable[id] ? 'Save' : 'Edit'}</a>
          </td>
          <td>
            <a className="btn btn-danger" onClick={this.props.handleDelete.bind(this, id)}>Delete</a>
          </td>
        </tr>
      );
    }, this);

    return (
      <React.Fragment>
        <tbody>
          {list}
        </tbody>
        <a className="btn btn-default" onClick={this.checkState.bind(this)} >Check State</a>
      </React.Fragment>
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
