import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Loader.module.css';

interface Props {
  count?: number;
}

const Loader: React.FC<Props> = ({ count }) => {
  const items = Array(count ?? 0).fill(null);
  return (
    <React.Fragment>
      {items.map((item, i) => (
        <Skeleton key={i} className={styles.card} wrapper={React.Fragment} />
      ))}
    </React.Fragment>
  );
};

export default Loader;
