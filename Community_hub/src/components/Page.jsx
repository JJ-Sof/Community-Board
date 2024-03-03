import React from "react";
import Attraction from "./Attraction";

const Page = () => {
    return (
        <div className="Page">
            <table>
                <thead>
                    <tr>
                        <th className="day">Day</th>
                        <th>Georgia Aquarium</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8 AM</td>
                        <Attraction attraction='Centennial Park' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>   
        </div>
    )
}

export default Page;
