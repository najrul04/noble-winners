import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import Winner from '../Winner/Winner';
import './Winners.css';

const Winners = () => {

    const [winner, setWinners] = useState([]);
    const [card, setCard] = useState([])

    useEffect( () => {

        fetch('./nobelPrize.json')
        .then(res => res.json())
        .then(data => setWinners(data))

    } , [])

    const handleAddToCard = (winner) => {

        const newCard = [...card, winner]
        setCard(newCard)

    }

    return (
        <div className="winners_container">
            
        <div className="winner_container">
            {

                winner.map(winner => <Winner
                     key = {winner.key}
                    winner={winner}
                    handleAddToCard={handleAddToCard}
                     
                     
                     ></Winner>)

            }


        </div>



        <div className="achievement_container">

            <Card card ={card}></Card>

        </div>

        </div>
    );
};

export default Winners;