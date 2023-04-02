import React from 'react';
import { CardList, SearchBar } from '../../components';
import styles from './MainPage.module.css';
import { useCards } from '../../api/cards';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useLocalStorage('search');

  const {
    data: { cards },
    error,
  } = useCards();

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading}>Pokémon Cards</h3>
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <CardList searchQuery={searchQuery} cards={cards} error={error} />
    </div>
  );
};

export default MainPage;
