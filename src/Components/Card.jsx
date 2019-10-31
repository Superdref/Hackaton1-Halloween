import React from 'react';
import { Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import '../CSS/Card.scss';


class MyCard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          flipped: false,
          clicked: false
        }
    };
    flip = () => {
      this.setState({
        flipped: !this.state.flipped,
        clicked: true,
      });
    }
    render () {
      let flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
      if (!this.state.clicked) flippedCSS =  "";
        return(
          <div className="Card" onClick={this.flip}>
            <div className={"Card-Front"+flippedCSS}>
              <img width="100%" height="50%" src="https://media.giphy.com/media/iZYiyCPNG4oes/giphy.gif" alt="coucou" />
              <p>caca</p>
            </div>
            <div className={"Card-Back"+flippedCSS}>
              <img width="100%" height="100%" src={this.props.posterUrl} alt="coucou"/>
            </div>
          </div>
        )
    }
}

export default MyCard;