import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from='/' to='/home'/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App;
