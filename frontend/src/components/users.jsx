import React from 'react';

export class UserList extends React.Component {
  render() {
    var users = this.props.users.map(user => <User key={user.id} user={user}/>);
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Id</th>
          </tr>
          {users}
        </tbody>
      </table>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.id}</td>
      </tr>
    )
  }
}
