import React from "react";
import './Cards.css';

function Cards(props){
    return(
        <div className="Cards">
            <div className="CardsLeft"></div>
            <div className="CardsRight">
                <div className="CardItem">Item: {props.rItem}</div>
                <div className="CardDate">Date: {props.rDate}</div>
                <div className="CardLocation">Location:{props.rLocation}</div>
                <div className="CardDiscription">Description: {props.rDescription}</div>
                <div className="CardEmail">E-mail:{props.rMail}</div>
                <div className="CardPh">Ph No.: {props.rPh}</div>
            </div>

        </div>
    )
}

export default Cards;
