import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="username">First Name</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Last Name</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
