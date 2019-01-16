import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import {Api} from '../../../middleware/api'

class UserItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      editable: false,
    };
  }

  handleClickEdit (id, user, e) {
    console.log('UserItem:handleClickEdit');

    if (!this.state.editable)
      this.setState({ editable: true });
    else {
      this.setState({ editable: false });

      user.username = this.refs.username.value;
      user.fullname = this.refs.fullname.value;
      user.password = this.refs.password.value;
      user.email = this.refs.email.value;

      Api.editUser(id, user);
    }
  }

  render () {
    let user = this.props.user;
    let username = this.state.editable ? <input type='text' defaultValue={user.username} ref="username"/> : <p>{user.username}</p>;
    let fullname = this.state.editable ? <input type='text' defaultValue={user.fullname} ref="fullname"/> : <p>{user.fullname}</p>;
    let password = this.state.editable ? <input type='text' defaultValue={user.password} ref="password"/> : <p>{user.password}</p>;
    let email    = this.state.editable ? <input type='text' defaultValue={user.email} ref="email"/>    : <p>{user.email}</p>;

    return (
      <tr>
        <td>{username}</td>
        <td>{fullname}</td>
        <td>{password}</td>
        <td>{email}</td>
        <td>
          <button type="button" class="btn btn-warning" onClick={this.handleClickEdit.bind(this, this.props.id, user)}>{this.state.editable ? 'Save' : 'Edit'}</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" onClick={this.props.handleDelete.bind(this, this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

UserItem.propTypes = {
  people: PropTypes.string
};
export default UserItem
