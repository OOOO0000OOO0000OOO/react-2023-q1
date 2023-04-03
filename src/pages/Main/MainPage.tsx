import React, { useState } from 'react';
import { CardList, SearchBar } from '../../components';
import styles from './MainPage.module.css';
import { useCards } from '../../api/cards';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const MainPage = () => {
  const [enterQuery, setEnterQuery] = useLocalStorage('search');
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: { cards },
    error,
  } = useCards();

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading}>Pokémon Cards</h3>
      <SearchBar
        searchQuery={enterQuery}
        onSearch={setSearchQuery}
        onChange={setEnterQuery}
      />
      <CardList searchQuery={searchQuery} cards={cards} error={error} />
    </div>
  );
};

export default MainPage;
