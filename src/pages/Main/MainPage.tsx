import React from 'react';
import { CardList, SearchBar } from 'components';
import { characterService } from 'services';
import { useLocalStorage, useService } from 'hooks';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [name, setName] = useLocalStorage('search');

  const { getCharacters } = characterService;

  const {
    data: { results, error: notFound },
    loading,
    error,
  } = useService({
    service: getCharacters,
    params: { name },
    initialData: {},
    deps: name,
  });

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading}>Rick and Morty</h3>
      <SearchBar searchQuery={name} onSearch={setName} />
      <CardList
        cards={results ?? []}
        error={error}
        loading={loading}
        notFound={notFound}
      />
    </div>
  );
};

export default MainPage;
