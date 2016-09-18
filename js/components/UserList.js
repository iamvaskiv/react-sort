import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }

    fetch('../data.json')
      .then((res) => res.json())
      .then((json) => {
        this.setState({users: json});
      })
      .catch((err) => console.log(err));
  }


  render() {
    let row = [];

    this.state.users.forEach((user, i) => {
      if (user.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) return;
      row.push(<UserData key={i} onUserClick={this.props.onUserClick} user={user} />);
    });

    if (!row.length) {
      row.push(<tr key="didn't found."><td>sorry, nothing found.</td></tr>);
    }

    return (
      <table className="user-list">
        <thead>
          <tr>
            <td>Avatar</td>
            <td>Name</td>
            <td>Age</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    )
  }
}
