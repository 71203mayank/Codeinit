import React from "react";
import './Cards.css';

function Cards(props){
    return(
        <div className="Cards">
            <div className="CardsLeft"></div>
            <div className="CardsRight">
                <div className="CardItem"><span>Item: </span> {props.rItem}</div>
                <div className="CardDate"><span>Date: </span>{props.rDate}</div>
                <div className="CardLocation"><span>Location:</span>{props.rLocation}</div>
                <div className="CardDiscription"><span>Description: </span>{props.rDescription}</div>
                <div className="CardEmail"><span>E-mail: </span>{props.rMail}</div>
                <div className="CardPh"><span>Ph No.: </span>{props.rPh}</div>
            </div>

        </div>
    )
}

export default Cards;
