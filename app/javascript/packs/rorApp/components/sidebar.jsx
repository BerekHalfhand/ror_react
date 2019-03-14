import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <aside className="col-2 py-3">
    <Link to="/" className="btn btn-success d-block m-2">Home</Link>
    <Link to="/userList" className="btn btn-success d-block m-2">User List</Link>
    <Link to="/spreadsheet" className="btn btn-success d-block m-2">Spreadsheet</Link>
  </aside>
)

export default Sidebar
