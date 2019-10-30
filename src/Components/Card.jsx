import React from 'react';
import '../CSS/Card.scss';

class Card extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    };

    render () {
        return(
            <label>
                <input type="checkbox"  />
                <div class="card">
                    <div class="front">Front</div>
                    <div class="back">Back</div>
                </div>
            </label>
        )
    }
}

export default Card;