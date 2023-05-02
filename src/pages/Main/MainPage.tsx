import React, { useEffect, useState } from 'react';
import { CardList, SearchBar } from 'components';
import { useSelector } from 'react-redux';

import styles from './MainPage.module.css';

import { RootState } from 'store/types';

const MainPage = () => {
  const searchQuery = useSelector((state: RootState) => state.character.name);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(searchQuery);
  }, [searchQuery]);

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <h3 className={styles.heading}>Rick and Morty</h3>
        <SearchBar searchQuery={searchQuery} />
        <CardList name={name} />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
