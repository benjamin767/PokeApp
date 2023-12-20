import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import questionMark from "./question-mark.png";

const Card = ({ pokemon }) => {
    return (<>
        <Link to={"/" + pokemon.name}>
            <section className="card">
                <h2> { pokemon.name }</h2>
                <img src={questionMark} alt="question"/>
            </section>
        </Link>
    </>);
};

export default Card;