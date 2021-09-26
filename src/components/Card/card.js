import React from 'react';
import './card.css';

const Card = (props) => {
    
    const {card} = props;

    let total = 0;
    let newName = [];
    for(const winner of card){

        total = total + winner.prize;
        newName.push(winner)

    }

    return (
        <div>
        <h3 className="nobel_winner_list">Add Winners</h3>
        <h5>Nobel Winners: {props.card.length}</h5>
        <h5>Total Cost: {total}</h5>
        <div>

        {
                    newName.map(winner => <p className='added_winner'> <img src={winner.img} alt="" width="100" height="100"></img><br />
                    
                        
                        {winner.name}
                    </p>)
                }

        </div>
        </div>
    );
};

export default Card;