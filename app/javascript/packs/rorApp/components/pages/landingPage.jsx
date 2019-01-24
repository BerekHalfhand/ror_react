import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = props => (
  <article>
    <h1>The Landing Page</h1>
    <Link to="/userList">User List</Link>
    <br/>
    <Link to="/spreadsheet">Spreadsheet</Link>
  </article>
)

export default LandingPage
