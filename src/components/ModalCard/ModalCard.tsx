import { useService } from 'hooks';
import { Character } from 'models';
import React from 'react';
import { characterService } from 'services';
import styles from './ModalCard.module.css';
import { NotFoundPage } from 'pages';
import ModalCardLoader from 'components/ModalCardLoader/ModalCardLoader';

const ModalCard: React.FC<{ id: Character['id'] }> = ({ id }) => {
  const { getCharacter } = characterService;

  const { data, loading, error } = useService({
    service: getCharacter,
    initialData: {} as Character,
    params: id,
    deps: id,
  });

  const {
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    episode,
    error: notFound,
  } = data;

  if (loading)
    return (
      <div data-testid="loader" className={styles.cardLoading}>
        <ModalCardLoader />
        <span className={styles.message}>progressing...</span>
      </div>
    );

  if (error)
    return (
      <div className={styles.cardLoading}>
        <ModalCardLoader />
        <div data-testid="error" className={styles.message}>
          Error: {error.message}
        </div>
      </div>
    );

  if (notFound) return <NotFoundPage />;

  return (
    <div className={styles.content}>
      <img src={image} alt={name} className={styles.image}></img>
      <div className={styles.description}>
        <h3 className={styles.title}>{name}</h3>
        <p>status: {status}</p>
        <p>species: {species}</p>
        <p>gender: {gender}</p>
        {origin?.name && <p>origin location: {origin.name}</p>}
        {location?.name && <p>last known location: {location.name}</p>}
        {episode?.at(0) && (
          <p>first appeared in episode: {episode?.at(0)?.match(/\d+$/)}</p>
        )}
      </div>
    </div>
  );
};

export default ModalCard;
