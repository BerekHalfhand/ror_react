import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/header';
import Sidebar from './components/sidebar';
import LandingPage from './components/landingPage';
import UserList from './components/userList';
import Spreadsheet from './components/spreadsheet';

const App = (props) => (
  <Router>
    <div className="row layout">
      <Header />
      <Sidebar/>
      <article id="app-body" className="main col-10 py-3">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/userList' component={UserList} />
        <Route exact path='/spreadsheet' component={Spreadsheet} />
      </article>
    </div>
  </Router>

)

export default App;
