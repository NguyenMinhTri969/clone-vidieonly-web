import React from "react";
import "./Card.scss"

const Card = props => {
    const cardStyle = {
        backgroundImage:`url(${props.bg})`,
    }
    return (
        <div style={cardStyle} className={`card ${props.className}`}>
         {props.children}
        </div>
    )
}

export default Card;