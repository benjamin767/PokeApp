import React  from "react";
import "./Spinner.css";
import pikachu from "./pikachu.gif";


const Spinner = () => {
    return (
        <div className="spinner-container">
            <img 
                className="pikachu-spinner"
                src={ pikachu }
                alt="pikapika"
            />
        </div>
    );
};

export default Spinner;