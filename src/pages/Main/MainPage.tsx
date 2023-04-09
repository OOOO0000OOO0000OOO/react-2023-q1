import React, { useState } from 'react';
import { CardList, SearchBar } from 'components';
import { characterService } from 'services';
import { useLocalStorage, useService } from 'hooks';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [enterQuery, setEnterQuery] = useLocalStorage('search');
  const [, setSearchQuery] = useState('');

  const { getCharacters } = characterService;

  const {
    data: { results },
    error,
    loading,
  } = useService(getCharacters, {});

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading}>Rick and Morty</h3>
      <SearchBar
        searchQuery={enterQuery}
        onSearch={setSearchQuery}
        onChange={setEnterQuery}
      />
      <CardList cards={results ?? []} error={error} loading={loading} />
    </div>
  );
};

export default MainPage;
