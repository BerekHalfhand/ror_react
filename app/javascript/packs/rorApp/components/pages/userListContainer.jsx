import React from 'react'
import { Link } from 'react-router-dom'
import {Api} from 'packs/rorApp/middleware/api'
import autoBind from 'react-autobind'

// Components
import UserList from './userList'

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: props.users || null,
      newUser: {},
    }
    autoBind(this)
  }

  handleSubmit(event, newUser) {
  // console.log("handleSubmit")
    event.preventDefault()
    newUser = newUser || this.state.newUser

    if (!newUser || !newUser.username)
      return false

    Api.createUser(newUser)
    .done(response => {
        console.log('then')
        console.dir(response)
        let newUsers = this.state.users
        newUsers.push(response)
        this.setState({
          users: newUsers
        })
        return response
    })

    return true
  }

  handleChange(event) {
    // console.log(`handleChange: ${event.target.id}, ${event.target.value}`)
    let field = {[event.target.id]: event.target.value}
    this.setState({
      newUser: {...this.state.newUser, ...field}
    })
  }

  removeUser (id) {
    var newUsers = this.state.users.filter((user) => {
      return user._id.$oid != id
    })

    this.setState({ users: newUsers })
  }

  handleDelete (id) {
    // console.log("handleDelete ", id)
    Api.deleteUser(id)
    .done(response => {
      this.removeUser(id)
    })
  }

  componentDidMount() {
    if (!this.state.users)
      Api.getUsers()
      .done(response => {
        console.log(`Loaded ${response.length} users`)
        this.setState({
          users: response,
        })
      })
  }

  render() {
    return(
      <UserList handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                users={this.state.users} />
    )
  }
}
