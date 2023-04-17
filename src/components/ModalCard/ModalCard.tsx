import React from 'react';
import { Character } from 'models';
import { ModalCardLoader } from 'components';
import { NotFoundPage } from 'pages';
import styles from './ModalCard.module.css';
import { useGetCharacterByIdQuery } from 'store/api';

const ModalCard: React.FC<{ id: Character['id'] }> = ({ id }) => {
  const { data, isFetching, isError } = useGetCharacterByIdQuery(id);

  if (isFetching)
    return (
      <div data-testid="loader" className={styles.cardLoading}>
        <ModalCardLoader />
        <span className={styles.message}>progressing...</span>
      </div>
    );

  if (isError || !data) return <NotFoundPage />;

  const { name, status, species, gender, origin, location, image, episode } =
    data;

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
