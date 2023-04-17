import React from 'react';
import { CardList, SearchBar } from 'components';
import { useLocalStorage } from 'hooks';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [name, setName] = useLocalStorage('search');

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <h3 className={styles.heading}>Rick and Morty</h3>
        <SearchBar searchQuery={name} onSearch={setName} />
        <CardList name={name} />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
