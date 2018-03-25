import React, { Component } from 'react';
import axios from 'axios';
import { ListGroupItem, ListGroup, Grid, Row, Col } from 'react-bootstrap';
import MovieList from './MovieList';

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
      ],
      character: '',
      movies: [],
      loading: false
    }
  }

  renderCharacters() {
    return this.state.characters.map((character, index) => (
      <ListGroupItem key={index} id={character.name} onClick={this.handleClick.bind(this)}>{character.name}</ListGroupItem>
    ));
  }

  renderMovies() {
    if (this.state.loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (this.state.error && this.state.error !== '') {
      return (
        <div>"These aren’t the droids you’re looking for..."</div>
      );
    }

    if (this.state.character !== '') {
      return (
        <MovieList movies={this.state.movies} name={this.state.character} />
      );
    }
  }

  handleClick(e) {
    let character = this.state.characters.find(obj => obj.name === e.target.id);
    this.setState({ character: character.name, loading: true });
    console.log(character);

    // Get character info
    axios.get(character.url)
      .then(res => {
        let films = res.data.films || [];
        let promises = films.map(filmUrl => axios.get(filmUrl));
        let filmObjects = [];

        axios.all(promises).then(results => {
          results.forEach(response => {
            filmObjects.push(response.data);
          });
        });

        this.setState({ loading: false, error: '', movies: filmObjects });
      }).catch(error => {
        this.setState({ loading: false, error });
      });
  }

  render() {
    return (
      <div className="CharacterList">
      <Grid>
        <Row>
          <Col md={6}>
            <ListGroup>
              {this.renderCharacters()}
            </ListGroup>
          </Col>
          <Col md={6}>
              {this.renderMovies()}
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
export default CharacterList;
