import React from 'react';
import {UserList} from './users';

export default
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  loadUsersFromServer() {
    $.ajax({url: "api/users"}).then((data) => {
      this.setState({users: data});
    });
  }
  componentDidMount() {
    this.loadUsersFromServer();
  }

  render() {
    return (
      <UserList users={this.state.users}/>
    );
  }
}
