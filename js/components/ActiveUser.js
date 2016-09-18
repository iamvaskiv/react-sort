import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    let activeUser = this.props.activeUser;

    return (
      <div className="active-user">
        <figure className="avatar-big">
          <img src={'../../images/' + activeUser.image + '.svg'} alt="avatar" />
        </figure>
        <div className="part">
          {activeUser.name}
        </div>
        <div className="part">
          age: {activeUser.age}
        </div>
        <div className="part">
          {activeUser.phrase}
        </div>
      </div>
    )
  }
}
