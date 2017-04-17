import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route name="Home" exact path="/" component={Home}/>
      <Route name="Login" exact path="/login" component={Login}/>
      <Route name="NotFound" path="*" component={NotFound}/>
    </Switch>
  </Router>
)

export default App;
