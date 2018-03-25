import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './MovieList.css';
import moment from 'moment';

class MovieList extends Component {
  renderMovies() {
    return this.props.movies.map((film, index) => (
      <li key={index}>
        <span className="title">{film.title} - Episode {film.episode_id}</span>
        <br/>
        Release Date: {moment(film.release_date).format("dddd, MMMM Do YYYY")}
        <br/>
        Director: {film.director}
      </li>
    ));
  }

  render() {
    return (
      <Panel>
        <Panel.Heading className="character-name">{this.props.name}</Panel.Heading>
        <Panel.Body className="movie-list">
          <ol>
            {this.renderMovies()}
          </ol>
        </Panel.Body>
      </Panel>
    );
  }
}
export default MovieList;
