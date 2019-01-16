import React from 'react';
import { Link } from 'react-router-dom';
import {Api} from '../middleware/api'

// Components
import UserTable from './userList/userTable';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
    this.onClickNew = this.onClickNew.bind(this);
    this.checkState = this.checkState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  onClickNew() {
    console.log("onClickNew");
    var username = this.refs.username.value;
    var fullname = this.refs.fullname.value;
    var password = this.refs.password.value;
    var email = this.refs.email.value;
    //.createUser(username, fullname);
    $.ajax({
      url: "/api/v1/user",
      type: "POST",
      data: { user: { username: username, fullname: fullname, password: password, email: email } },
      success: response => {
        let newUsers = this.state.users;
        newUsers.push(response);
        this.setState({
          users: newUsers
        });
      }
    });
  }

  removeUser (id) {
    var newUsers = this.state.users.filter((user) => {
      return user._id.$oid != id;
    });

    this.setState({ users: newUsers });
  }

  handleDelete (id) {
    console.log("deleteUser ", id);
    $.ajax({
      url: `/api/v1/user/${id}`,
      type: "DELETE",
      success: response => {
        this.removeUser(id);
      }
    });
  }

  checkState() {
    console.dir(this.state);
  }

  componentDidMount() {
    // this.setState({loaded: true});
    // Api.getUsers(this.setUsers);
    // .then
    $.getJSON('/api/v1/user.json', (response) => {
      this.setState({
        users: response,
      });
    });
  }

  render() {
    return(
      <div>
        <h1 className="hello">I'm a user list</h1>
        <a className="btn btn-default" onClick={this.checkState} >Check State</a>

        <input ref="username" placeholder="Username" className="myInput"/>
        <input ref="fullname" placeholder="Full Name" className="myInput"/>
        <input ref="password" placeholder="Password" className="myInput"/>
        <input ref="email" placeholder="Email" className="myInput"/>
        <a className="btn btn-default" onClick={this.onClickNew} >New User</a>
        <hr />

         <UserTable users={this.state.users} handleDelete={this.handleDelete.bind(this)}/>


         <Link to="/">Home</Link>
      </div>
    )
  }
}

export default UserList
