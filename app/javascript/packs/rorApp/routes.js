import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/header';
import Sidebar from './components/sidebar';
import LandingPage from './components/landingPage';
import UserList from './components/userList';

const App = (props) => (
  <Router>
    <div className="row layout">
      <Header />
      <Sidebar/>
      <article id="app-body" className="main col-10 h-100 py-3">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/userList' component={UserList} />
      </article>
    </div>
  </Router>

)

export default App;
