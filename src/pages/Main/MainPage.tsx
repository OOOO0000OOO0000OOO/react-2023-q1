import React, { Component } from 'react';
import CardsList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <h3>Pokémon Cards</h3>
        <SearchBar />
        <CardsList />
      </div>
    );
  }
}
