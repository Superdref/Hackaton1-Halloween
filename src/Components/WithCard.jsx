import React from 'react';
import axios from 'axios';
import Card from './Card';

import { Row, Container } from 'reactstrap';

class WithCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isError: false
    };
    this.randomNumber = this.randomNumber.bind(this)
  }

  randomNumber(max){
    return Math.floor(Math.random()* max)
  }

  componentDidMount() {
    axios
      .get(
        `https://hackathon-wild-hackoween.herokuapp.com/movies/`
      )
      
      .then(res => {
        let movies = res.data.movies
        const tenMovies = []
        for (let i = 0; i < 10; i++){
          const rnd = this.randomNumber(movies.length)
          if (movies[rnd]){
            console.log(movies[rnd]);
            tenMovies.push(movies[rnd])
            delete movies[rnd]
          } else {
            tenMovies.push(movies[0])
            delete tenMovies[0]
            [i+1]
          }
          
        }
        console.log(tenMovies.length);
        this.setState({movieList: tenMovies})
      });
  }

  render() {
    return (
      <Container>
      <Row>
        {this.state.movieList.map((movie, id) => {
          return <Card {...movie} key={id} />;
        })}
      </Row>
        </Container>
    );
  }
}

export default WithCard;