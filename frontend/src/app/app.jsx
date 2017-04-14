import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    loadUsersFromServer() {
        var self = this;
        $.ajax({url: "api/users"}).then(function(data) {
            self.setState({users: data});
        });
    }
    componentDidMount() {
        this.loadUsersFromServer();
    }

    render() {
        return (<UserList users={this.state.users}/>);
    }
}

class UserList extends React.Component {
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

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
