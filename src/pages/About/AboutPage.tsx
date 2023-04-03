import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h3 className={styles.heading}>About Us</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
        doloribus dolore quibusdam eaque nemo voluptatum aperiam, autem, veniam
        voluptate et eligendi. Culpa, sint quis reprehenderit quas harum iusto
        perspiciatis!
      </p>
    </div>
  );
};

export default AboutPage;
