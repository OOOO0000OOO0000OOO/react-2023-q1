import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div data-testid="404">
        <h3>404</h3>
        <p>Nothing was found</p>
        <img src="src/assets/pokemonsad.jpg" alt=""></img>
      </div>
    );
  }
}
