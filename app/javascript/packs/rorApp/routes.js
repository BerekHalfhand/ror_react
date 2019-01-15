import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/header';
import LandingPage from './components/landingPage';
import UserList from './components/userList';

const App = (props) => (
  <Router>
    <div id="app-body">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/userList' component={UserList} />
    </div>
  </Router>

)

export default App;
