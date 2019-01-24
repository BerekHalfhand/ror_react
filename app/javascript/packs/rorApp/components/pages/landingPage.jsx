import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = props => (
  <article>
    <h1>The Landing Page</h1>
    <img src="https://www.priorityonejets.com/wp-content/uploads/2017/01/Private-Airport-Runway.jpg" className="w-100" />
    <Link to="/userList">User List</Link>
    <br/>
    <Link to="/spreadsheet">Spreadsheet</Link>
  </article>
)

export default LandingPage
