import React from 'react';
import { CardList, SearchBar } from 'components';
import { useSelector } from 'react-redux';

import styles from './MainPage.module.css';

import { StoreState } from 'store/types';

const MainPage = () => {
  const name = useSelector((state: StoreState) => state.character.name);

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <h3 className={styles.heading}>Rick and Morty</h3>
        <SearchBar searchQuery={name} />
        <CardList name={name} />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
