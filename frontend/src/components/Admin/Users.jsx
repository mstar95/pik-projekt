import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userListFetchStart, userListFetchSuccess, userListFetchFail } from '../../actions';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.getUsers();
  }

  getUsers() {
    let { dispatch } = this.props;

    console.log('getUsers');

    dispatch(userListFetchStart());
    return axios.get('/api/users')
      .then(response => dispatch(userListFetchSuccess(response.data)))
      .catch(error => {
        console.log(error);
        dispatch(userListFetchFail())
      });
  }

  render() {
    let { loading, error, users } = this.props;

    let content;
    if (loading) {
      content = <p>{'Loading...'}</p>
    } else if (error) {
      content = <p>{'Error'}</p>
    } else {
      let userListItems = users.map(user => (
        <li key={user.id}><NavLink to={'/user/' + user.id}>{user.name}xxx</NavLink></li>
      ));
      content = <ul className='link-list'>{userListItems}</ul>
    }

    return (
      <PageWrapper>
        <div className='page-item'>
          <h1 className='page-info'>{'Users'}</h1>
          {content}
        </div>
      </PageWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.userlist.loading,
    error: state.userlist.error,
    users: state.userlist.users
  }
}

Users = connect(mapStateToProps)(Users)

export default Users;
