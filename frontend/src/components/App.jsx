import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Test from './Test/Test';
import TestList from './Test/TestList';
import NotFound from './NotFound';
import Users from './Admin/Users';
import ResultList from './Admin/ResultList';

let App = (props) => (
  <Router basename="/app">
    <Switch>
      <Redirect exact from='/' to='/home'/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/tests" component={TestList} />
      <Route exact path="/test/:id" component={Test} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/user/:id" component={ResultList} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </Router>
)

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
  }
}

App = connect(mapStateToProps)(App)


export default App;
