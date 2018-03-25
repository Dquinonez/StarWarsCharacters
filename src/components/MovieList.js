import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './MovieList.css';
import moment from 'moment';

class MovieList extends Component {
  renderMovies() {
    return this.props.movies.map((film, index) => (
      <li key={index}>
        <span className="title">Episode {film.episode_id} - {film.title}</span>
        <br/>
        <span className="property-name">Release Date: </span>
        {moment(film.release_date).format("dddd, MMMM Do YYYY")}
        <br/>
        <span className="property-name">Director: </span>
        {film.director}
      </li>
    ));
  }

  render() {
    return (
      <Panel>
        <Panel.Heading className="character-name">{this.props.name}</Panel.Heading>
        <Panel.Body className="movie-list">
          <ul>
            {this.renderMovies()}
          </ul>
        </Panel.Body>
      </Panel>
    );
  }
}
export default MovieList;
