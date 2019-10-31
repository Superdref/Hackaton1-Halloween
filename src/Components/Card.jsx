import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

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
      const dash = /_/g;
      let flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
      if (!this.state.clicked) flippedCSS =  "";
        return(
          <Card className="Card bg-danger" onClick={this.flip}>
            <div className={"Card-Front"+flippedCSS}>
              <CardImg width="100%" height="100%" src="./images/Joker.png" alt="Joker" />
              <CardImgOverlay>
                <CardTitle style={{color: "black", fontSize: "20px"}}>Movie Country: {this.props.country.replace(dash, ' ')}</CardTitle>
                <CardText>Year: {this.props.year}</CardText>
              </CardImgOverlay>
            </div>
            <div className={"Card-Back"+flippedCSS}>
              <CardImg width="100%" height="100%" src={this.props.posterUrl} alt="coucou"/>
              <CardImgOverlay>
                <CardTitle style={{color: "white", fontSize: "40px"}}>{this.props.title.replace(dash, ' ')}</CardTitle>
              </CardImgOverlay>
            </div>
          </Card>
        )
    }
}

export default MyCard;