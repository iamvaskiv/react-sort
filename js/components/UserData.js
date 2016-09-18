import React, { Component } from 'react';

export default class UserData extends Component {  

  handleClick() {
    this.props.onUserClick(this.props.user);
  }

  render() {
    let user = this.props.user;

    return (
      <tr onClick={this.handleClick.bind(this)}>
        <td><div className="avatar-small"><img src={'../../images/' + user.image + '.svg'} alt="avatar" /></div></td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
      </tr>
    )
  }
}
