import React from 'react';
import axios from 'axios';
import Card from './Card';

import { Row } from 'reactstrap';

class WithCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ['Us', 'Blood Island', 'Hereditary', 'Saw', 'Paranormal Activity', 'Saw 2'],
      movieList: [],
      isError: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://hackathon-wild-hackoween.herokuapp.com/movies/`
      )
      
      .then(response => {
        console.log(response);
      });

      const roster = response.data.movieRoster.roster.filter(
        player => player.raidProgress.progress.mythic > 4
      );
  }

  render() {
    return (
      <Row className="justify-content-between">
        {this.state.movies.map((movie, i) => {
          return <Card {...movie} key={i} />;
        })}
      </Row>
    );
  }
}

export default WithCard;