import React, { Component } from 'react';
import styles from './AboutPage.module.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <h3 className={styles.heading}>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
          doloribus dolore quibusdam eaque nemo voluptatum aperiam, autem,
          veniam voluptate et eligendi. Culpa, sint quis reprehenderit quas
          harum iusto perspiciatis!
        </p>
      </div>
    );
  }
}
