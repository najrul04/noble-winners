import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon as SocialMedia } from 'react-social-icons';
import './Winner.css';

const Winner = (props) => {
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
            <div className="grid_item"><button
            onClick={() => props.handleAddToCard(props.winner)}
            >{cardIcon} Click Here to Add</button></div>

            <div className='icon'>
                <span><SocialMedia className="icons" target="_blank" url="https://www.facebook.com/zuck" /></span>

                <span><SocialMedia className="icons" target="_blank" url="https://www.linkedin.com/in/mark-zuckerberg-618bba58/" /></span>
                
                <span><SocialMedia className="icons" target="_blank"url="https://twitter.com/finkd?lang=en" /></span>
            </div>

            
            
        </div>
    );
};

export default Winner;

