import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login/Login';
import Test from './Test/Test';
import NotFound from './NotFound';

function checkAuth(component, loggedIn) {
  return () => {
    if(loggedIn) {
      return component;
    } else {
      return <Redirect to='/login'/>
    }
  }
}

let App = (props) => (
  <Router basename="/app">
    <Switch>
      <Redirect exact from='/' to='/home'/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/test" render={checkAuth(<Test />, props.loggedIn)} />
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
