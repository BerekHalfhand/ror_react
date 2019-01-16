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

        this.refs.username.value = "";
        this.refs.fullname.value = "";
        this.refs.password.value = "";
        this.refs.email.value = "";
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
    $.getJSON('/api/v1/user.json', (response) => {
      console.log(`Loaded ${response.length} users`);
      this.setState({
        users: response,
      });
    });
  }

  render() {
    return(
      <React.Fragment>
        <h1>I'm a user list</h1>
        <button type="button" className="btn btn-light mb-2" onClick={this.checkState.bind(this)}>Check State</button>

        <input ref="username" placeholder="Username" className="block mb-1"/>
        <input ref="fullname" placeholder="Full Name" className="block mb-1"/>
        <input ref="password" placeholder="Password" className="block mb-1"/>
        <input ref="email" placeholder="Email" className="block mb-1"/>
        <button type="button" className="btn btn-primary mt-1" onClick={this.onClickNew} >New User</button>
        <hr />
         <UserTable users={this.state.users} handleDelete={this.handleDelete.bind(this)}/>

         <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}

export default UserList
