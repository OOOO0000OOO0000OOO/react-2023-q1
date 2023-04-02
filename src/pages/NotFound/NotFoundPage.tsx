import React, { Component } from 'react';
import styles from './NotFoundPage.module.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div data-testid="404">
        <h3 className={styles.heading}>404</h3>
        <p>Nothing was found</p>
        <img src="/pokemonsad.jpg" alt=""></img>
      </div>
    );
  }
}
