import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

// Components
import UserTable from './userList/userTable'

const UserList = (props) => (
  <React.Fragment>
    <h1>Users in the system</h1>
    <form onSubmit={props.handleSubmit}>
      <input id="username" onChange={props.handleChange} placeholder="Username" className="d-block mb-1"/>
      <input id="fullname" onChange={props.handleChange} placeholder="Full Name" className="d-block mb-1"/>
      <input id="password" onChange={props.handleChange} placeholder="Password" className="d-block mb-1"/>
      <input id="email" onChange={props.handleChange} placeholder="Email" className="d-block mb-1"/>
      <Button color="primary" type="submit" className="mt-1">New User</Button>
    </form>
    <hr />
    <UserTable users={props.users} onDelete={props.handleDelete}/>
    <hr />
    <Link to="/">Home</Link>
  </React.Fragment>
)

export default UserList
