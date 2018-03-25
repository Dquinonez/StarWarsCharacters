import React from 'react';
import './App.css';
import CharacterList from './CharacterList';

const App = () => {
  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <CharacterList />
      <span className="footer">Created by Dolores Quinonez</span>
    </div>
  );
};

export default App;
