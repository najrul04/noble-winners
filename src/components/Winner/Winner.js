import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Winner.css';

const Winner = (props) => {
    console.log(props.winner);
    const {name, age, category, year, prize, Country, img} = props.winner
    const cardIcon = <FontAwesomeIcon icon={faPlus} />;
    return (
        <div className="winner_grid">

            <div className="grid_item"><img src={img} alt="" /></div>
            <div className="grid_item"><h2>{name}</h2></div>
            <div className="grid_item"><h3>Age: {age}</h3></div>
            <div className="grid_item"><h3>Category: {category}</h3></div>
            <div className="grid_item"><h3>Winning Year: {year}</h3></div>
            <div className="grid_item"><h3>Nationality: {Country}</h3></div>
            <div className="grid_item"><h3>Prize Money: $ {prize}</h3></div>
            <div className="grid_item"><button>{cardIcon} Click Here</button></div>

            
            
        </div>
    );
};

export default Winner;




           {/*  <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Age: {age}</h3>
            <h3>Category: {category}</h3>
            <h3>Winning Year: {year}</h3>
            <h3>Nationality: {Country}</h3>
            <h3>Prize Money: $ {prize}</h3>
            <button>Click Here</button> */}