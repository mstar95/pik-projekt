import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../actions';
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.logout();
  }
  logout() {
    return axios.post('/api/logout')
      .then(response => this.dispatch(logoutSuccess()));
  }
  render() {
    let message;
    if(this.props.logout.loggedIn) {
      message = "Logout failed";
    } else {
      message = "Logout successful";
    }

    return (
      <PageWrapper>
        <div className="page-item">
          <h1 className="page-info">Logout</h1>
          <p className="page-info">{ message }</p>
        </div>
      </PageWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { logout: state.login }
}

Logout = connect(mapStateToProps)(Logout)


export default Logout;
