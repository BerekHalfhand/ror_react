import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { addColumn } from './actions/index'


import Header from './components/header';
import Sidebar from './components/sidebar';
import LandingPage from './components/landingPage';
import UserList from './components/userList';
import Spreadsheet from './components/spreadsheet';

const App = props => (
  <div className="row layout">
    <Header />
    <Sidebar/>
    <article id="app-body" className="main col-10 py-3">
      <Route exact path='/' component={LandingPage} {...props} />
      <Route exact path='/userList' component={UserList} {...props} />
      <Route exact path='/spreadsheet' component={Spreadsheet} {...props} />
    </article>
  </div>
)

const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({
//   // handleOnLogin: data => dispatch(actions.onLogin(data)),
// });

export default connect(mapStateToProps, {addColumn})(App);
