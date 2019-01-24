import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { addColumn } from './actions/index'


import Header from './components/header';
import Sidebar from './components/sidebar';
import LandingPage from './components/pages/landingPage';
import UserListContainer from './components/pages/userListContainer';
import SpreadsheetContainer from './components/pages/spreadsheetContainer';

const App = props => (
  <section className="row layout">
    <Header />
    <Sidebar/>
    <article id="app-body" className="main col-10 py-3">
      <Route exact path='/' component={LandingPage} {...props} />
      <Route exact path='/userList' component={UserListContainer} {...props} />
      <Route exact path='/spreadsheet' component={SpreadsheetContainer} {...props} />
    </article>
  </section>
)

const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({
//   // handleOnLogin: data => dispatch(actions.onLogin(data)),
// });

export default connect(mapStateToProps, {addColumn})(App);
