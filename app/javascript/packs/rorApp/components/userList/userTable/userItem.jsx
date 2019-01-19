import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import {Api} from '../../../middleware/api'

export default class UserItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
    this.flipEditable = this.flipEditable.bind(this);
    this.state = { editable: false };
  }

  flipEditable() {
    this.setState({ editable: !this.state.editable });
  }

  handleEdit (id, user, e) {
    console.log('UserItem:handleEdit');
    if (!id || !user)
      return false;

    if (this.state.editable) {
      user.username = this.refs.username.value;
      user.fullname = this.refs.fullname.value;
      user.password = this.refs.password.value;
      user.email = this.refs.email.value;

      Api.editUser(id, user);
    }

    this.flipEditable();
    return true;
  }

  render () {
    let user = this.props.user;
    let username = this.state.editable ? <input type='text' defaultValue={user.username} ref="username"/> : <p>{user.username}</p>;
    let fullname = this.state.editable ? <input type='text' defaultValue={user.fullname} ref="fullname"/> : <p>{user.fullname}</p>;
    let password = this.state.editable ? <input type='text' defaultValue={user.password} ref="password"/> : <p>{user.password}</p>;
    let email    = this.state.editable ? <input type='text' defaultValue={user.email} ref="email"/>       : <p>{user.email}</p>;
    let cancelBtn= this.state.editable ?
                   <button type="button" className="btn btn-danger" onClick={() => this.flipEditable()}>Cancel</button> :
                   <button id="delete-button" type="button" className="btn btn-danger" onClick={this.props.onDelete.bind(this, this.props.id)}>Delete</button>;

    return (
      <tr>
        <td>{username}</td>
        <td>{fullname}</td>
        <td>{password}</td>
        <td>{email}</td>
        <td>
          <button type="button" className="btn btn-warning" onClick={this.handleEdit.bind(this, this.props.id, user)}>
            {this.state.editable ? 'Save' : 'Edit'}
          </button>
        </td>
        <td>
          {cancelBtn}
        </td>
      </tr>
    );
  }
}
