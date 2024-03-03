import React from "react";

const Attraction = (props) => {
    return (
        <div className={`Attraction-card ${props.color}`}>
            <img src={props.image} alt={props.attraction} className="Attraction-image"/>
            <h5>{props.attraction}</h5>
        </div>
    );
}

export default Attraction;