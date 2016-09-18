import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange(e) {
    this.props.onUserInput(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <h2>Enter name:</h2>
        <form>
          <div className="form-group">
            <input onChange={this.handleChange.bind(this)} className="form-control" type="text" />
          </div>
        </form>
      </div>
    );
  }
}
