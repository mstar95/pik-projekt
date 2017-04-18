import React from 'react';
import PageWrapper from './PageWrapper';
import axios from 'axios'
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: 'user',password:'password'};

    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(event) {
    // Just prevent the screen reload from the form actually submitting.
    event.preventDefault();
    axios({
      method: 'post',
      url: '/api/login',
      withCredentials: true,
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      auth: {
        username:  'user',
        password: 'password'
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({username: event.target.username});
    this.setState({password: event.target.password});
  }

  render() {
    return (
      <PageWrapper>
        <div className="page-contentpage-content">
          <h1>Login</h1>
          <form className="" onSubmit={this.doLogin}>
            <div>
              <label>Username</label>
              <input type="text" placeholder="Username" ref="username"
                     value = {this.state.user}
                     onChange={this.handleChange}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password"
                     ref="password" value = {this.state.password}
                     onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-success">Sign in</button>
          </form>
        </div>
      </PageWrapper>
    )
  }
}
export default Login;
