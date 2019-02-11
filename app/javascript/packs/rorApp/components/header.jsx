import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header id="header" className="col-12 py-3">
    <Link to="/" className="btn btn-warning m-2">Home</Link>
    <Link to="/userList" className="btn btn-warning m-2">User List</Link>
    <Link to="/spreadsheet" className="btn btn-warning m-2">Spreadsheet</Link>
  </header>
)

export default Header
