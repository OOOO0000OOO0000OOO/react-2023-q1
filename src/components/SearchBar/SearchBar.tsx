import React, { Component, ChangeEvent, FormEvent } from 'react';

interface Props {
  searchQuery: string;
  onSearch: (searchQuery: string) => void;
}

interface State {
  searchQuery: string;
}

export default class SearchBar extends Component<Props, State> {
  state: State = {
    searchQuery: this.props.searchQuery,
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.target.value });
  };

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.onChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
