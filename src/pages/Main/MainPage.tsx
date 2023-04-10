import React, { useState } from 'react';
import { Card, CardList, SearchBar } from 'components';
import { characterService } from 'services';
import { useLocalStorage, useService } from 'hooks';
import styles from './MainPage.module.css';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';

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

  const [isModalOpen, setIsModalOpen] = useState<{
    isOpen: boolean;
    id: -1 | number;
  }>({ isOpen: false, id: -1 });

  const onModalOpen = (id: number) => setIsModalOpen({ isOpen: true, id });
  const onModalClose = () => setIsModalOpen({ isOpen: false, id: -1 });

  const { isOpen, id } = isModalOpen;

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <h3 className={styles.heading}>Rick and Morty</h3>
        <SearchBar searchQuery={name} onSearch={setName} />
        <CardList
          cards={results ?? []}
          error={error}
          loading={loading}
          notFound={notFound}
          onModalOpen={onModalOpen}
        />
      </div>
      <Modal onClose={onModalClose} isOpen={isOpen}>
        <ModalCard id={id} />
      </Modal>
    </React.Fragment>
  );
};

export default MainPage;
