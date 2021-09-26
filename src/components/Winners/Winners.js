import React, { useEffect, useState } from 'react';
import Winner from '../Winner/Winner';
import './Winners.css';

const Winners = () => {

    const [winner, setWinners] = useState([]);

    useEffect( () => {

        fetch('./nobelPrize.json')
        .then(res => res.json())
        .then(data => setWinners(data))

    } , [])

    return (
        <div className="winners_container">
            
        <div className="winner_container">
            {

                winner.map(winner => <Winner winner={winner}></Winner>)

            }

           {/*  <div className="card_item">1</div>

            <div className="card_item">2</div>

            <div className="card_item">3</div>

            <div className="card_item">4</div>

            <div className="card_item">5</div>

            <div className="card_item">6</div>

            <div className="card_item">7</div>

            <div className="card_item">8</div>

            <div className="card_item">9</div> */}

        </div>



        <div className="achievement_container">
        <h5>Added Winners:</h5>
        <h5>Total Cost: $ </h5>

        </div>

        </div>
    );
};

export default Winners;