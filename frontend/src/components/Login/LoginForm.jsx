import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="form">
        <div className="form-field">
          <Field name="username" component="input" type="text" placeholder="Username" />
        </div>
        <div className="form-field">
          <Field name="password" component="input" type="password" placeholder="Password" />
        </div>
        <div className="login-button-wrapper">
          <button type="submit" className="login-button">&#9658;</button>
        </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
