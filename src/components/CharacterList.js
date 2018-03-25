import React, { Component } from 'react';
import './CharacterList.css';
import Character from './Character';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:
      [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        },
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    };
  }

  renderCharacters() {
    return this.state.characters.map((character, index) => (
      <Character key={index} name={character.name} url={character.url}/>
    ));
  }

  render() {
    return (
      <div className="CharacterList">
        {this.renderCharacters()}
      </div>
    );
  }
}
export default CharacterList;
