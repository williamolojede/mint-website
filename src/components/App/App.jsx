import React, { Component } from 'react';
import './App.css';

import Credits from '../Credits/Credits';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Something cool<span role="img" aria-label="cool">😎</span> is coming!!!</h1>
        <Credits />
      </div>
    );
  }
}

export default App;
