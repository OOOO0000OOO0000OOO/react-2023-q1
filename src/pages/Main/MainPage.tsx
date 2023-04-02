import React, { Component } from 'react';
import CardsList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CardData } from '../../models/CardData';
import styles from './MainPage.module.css';

interface State {
  searchQuery: string;
  cards: CardData[];
  error: Error | null;
}

export default class MainPage extends Component {
  state: State = {
    searchQuery: localStorage.getItem('search') || '',
    cards: [],
    error: null,
  };

  componentDidMount() {
    fetch('https://api.pokemontcg.io/v1/cards')
      .then((response) => response.json())
      .then(({ cards }) => this.setState({ cards }))
      .catch((error: Error) => this.setState({ error }));
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.searchQuery);
  }

  onSearch = (searchQuery: string) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className={styles.mainContainer}>
        <h3 className={styles.heading}>Pokémon Cards</h3>
        <SearchBar searchQuery={searchQuery} onSearch={this.onSearch} />
        <CardsList {...this.state} />
      </div>
    );
  }
}
