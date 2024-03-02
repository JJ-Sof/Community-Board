import React from "react";

const Attraction = (props) => {

    return (
        <td className={'Attraction' + props.color}>
            <h5>{props.attraction}</h5>
        </td>
    )
}

export default Event;