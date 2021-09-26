import React from 'react';
import './card.css';

const Card = (props) => {
    
    const {card} = props;

    let total = 0;
    for(const winner of card){

        total = total + winner.prize;

    }

    return (
        <div>
        <h3 className="nobel_winner_list">Added Winners</h3>
        <h5>Nobel Winners: {props.card.length}</h5>
        <h5>Total Cost: {total}</h5>
        </div>
    );
};

export default Card;