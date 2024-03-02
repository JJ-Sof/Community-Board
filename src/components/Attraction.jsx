import React from "react";

const Attraction = (props) => {
    return (
        <td className={'Event' + props.color}>
            <h5>{props.event}</h5>
        </td>
    )
}