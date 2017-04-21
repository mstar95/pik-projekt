import React from 'react';
import PageWrapper from './PageWrapper';
import axios from 'axios';
import querystring from 'query-string';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: 'user', password:'password'};

    this.onUsernameInput = this.onUsernameInput.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(event) {
    event.preventDefault();

    return axios({
      method: 'post',
      url: '/api/login',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      data: querystring.stringify({
        username: this.state.user,
        password: this.state.password
      })
    }).then(response => console.log('response:', response.data))
      .catch(error => console.log(error));
  }

  onUsernameInput(event) {
    this.setState({user: event.target.value});
  }

  onPasswordInput(event) {
    this.setState({password: event.target.value});
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
                     value={this.state.user}
                     onChange={this.onUsernameInput}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password"
                     ref="password" value={this.state.password}
                     onChange={this.onPasswordInput} />
            </div>
            <button type="submit" className="btn btn-success">Sign in</button>
          </form>
        </div>
      </PageWrapper>
    )
  }
}
export default Login;
