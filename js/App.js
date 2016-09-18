import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      filterText: '',
      activeUser: {}
    }
  }

  handleFilter(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleActiveUser(activeUser) {
    this.setState({
      activeUser: activeUser
    });
  }

  render() {
    return(
      <div className="container">
        <SearchBar onUserInput={this.handleFilter.bind(this)} />
        <div className="row">
          <div className="col-sm-8">
            <UserList onUserClick={this.handleActiveUser.bind(this)} filterText={this.state.filterText} />
          </div>
          <div className="col-sm-4">
            <ActiveUser activeUser={this.state.activeUser} />
          </div>
        </div>
      </div>
    );
  }
}
