import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class MovieList extends Component {
  renderMovies() {
    return this.props.movies.map((film, index) => (
      <li id={index} key={index}>{film.title}</li>
    ));
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>{this.props.name}</Panel.Heading>
        <Panel.Body>
          <ul>
            {this.renderMovies()}
          </ul>
        </Panel.Body>
      </Panel>
    );
  }
}
export default MovieList;
