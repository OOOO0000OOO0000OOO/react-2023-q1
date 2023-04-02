import React, { Component } from 'react';
import styles from './Layout.module.css';

export default class Layout extends Component<{ children: React.ReactNode }> {
  render() {
    const { children } = this.props;
    return <div className={styles.layout}>{children}</div>;
  }
}
