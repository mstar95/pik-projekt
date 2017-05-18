import React from 'react';
import axios from 'axios';
import querystring from 'query-string';
import PageWrapper from '../PageWrapper';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginSuccess, loginFail } from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    return axios({
      method: 'post',
      url: '/api/login',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      data: querystring.stringify({
        username: values.username,
        password: values.password
      })
    }).then(response => this.dispatch(loginSuccess()))
      .catch(error => this.dispatch(loginFail()));
  }

  render() {
    let message;
    if(this.props.login.loggedIn) {
      message = "Login successful";
    } else if(this.props.login.failed){
      message = "Login failed";
    } else {
      message = "Not logged in";
    }

    return (
      <PageWrapper>
        <div className="page-content">
          <LoginForm onSubmit={this.submit} />
          { message }
        </div>
      </PageWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { login: state.login }
}

Login = connect(mapStateToProps)(Login)


export default Login;
