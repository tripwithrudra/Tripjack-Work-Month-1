import React from "react";
import Car from './CarDetails'
import Counter from "./Counter";
import LifeCycle from "./lifecycle";

const InfoCard = ({ name, age, phone }) => {
    return (
        <div>
            <div>
                <h2>Contact Detials</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Phone: {phone}</p>
            </div>

            <h2>Below is Class Component:</h2>
            <h2>I have a car.</h2>
            <Car brand="TATA" />


            <Counter />


            <LifeCycle />
        </div>
    )
}

export default InfoCard;