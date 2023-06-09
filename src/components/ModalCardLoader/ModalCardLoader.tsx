import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './ModalCardLoader.module.css';

const ModalCardLoader: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <Skeleton
          containerTestId="image-skeleton"
          className={styles.image}
          wrapper={React.Fragment}
        />
        <div className={styles.description}>
          <Skeleton
            containerTestId="title-skeleton"
            className={styles.title}
            wrapper={React.Fragment}
          />
          <Skeleton
            containerTestId="line-skeletons"
            count={6}
            className={styles.line}
            wrapper={React.Fragment}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalCardLoader;
