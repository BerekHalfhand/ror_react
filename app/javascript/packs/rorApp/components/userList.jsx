import React from 'react';
import { Link } from 'react-router-dom';
import {Api} from '../middleware/api'

// Components
import UserTable from './userList/userTable';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users || null,
      newUser: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  handleSubmit(event, newUser) {
  // console.log("handleSubmit");
    event.preventDefault();
    newUser = newUser || this.state.newUser;

    if (!newUser || !newUser.username)
      return false;

    Api.createUser(newUser)
    .done(response => {
        console.log('then');
        console.dir(response);
        let newUsers = this.state.users;
        newUsers.push(response);
        this.setState({
          users: newUsers
        });
        return response;
    });

    return true;
  }

  handleChange(event) {
    // console.log(`handleChange: ${event.target.id}, ${event.target.value}`);
    let field = {[event.target.id]: event.target.value};
    this.setState({
      newUser: {...this.state.newUser, ...field}
    });
  }

  removeUser (id) {
    var newUsers = this.state.users.filter((user) => {
      return user._id.$oid != id;
    });

    this.setState({ users: newUsers });
  }

  handleDelete (id) {
    // console.log("handleDelete ", id);
    Api.deleteUser(id)
    .done(response => {
      this.removeUser(id);
    })
  }

  checkState() {
    console.dir(this.state);
  }

  componentDidMount() {
    if (!this.state.users)
      Api.getUsers()
      .done(response => {
        console.log(`Loaded ${response.length} users`);
        this.setState({
          users: response,
        });
      });
  }

  render() {
    return(
      <React.Fragment>
        <h1>Users in the system</h1>
        <button type="button" className="btn btn-light mb-2" onClick={this.checkState.bind(this)}>Check State</button>
        <form onSubmit={this.handleSubmit}>
          <input id="username" onChange={this.handleChange} ref="username" placeholder="Username" className="d-block mb-1"/>
          <input id="fullname" onChange={this.handleChange} ref="fullname" placeholder="Full Name" className="d-block mb-1"/>
          <input id="password" onChange={this.handleChange} ref="password" placeholder="Password" className="d-block mb-1 foo"/>
          <input id="email" onChange={this.handleChange} ref="email" placeholder="Email" className="d-block mb-1"/>
          <button type="submit" className="btn btn-primary mt-1">New User</button>
        </form>
        <hr />
        <UserTable users={this.state.users} onDelete={this.handleDelete.bind(this)}/>
        <hr />
        <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}
