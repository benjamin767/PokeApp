import "./Searchbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [ search, setSearch ] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    
    return (<>
    <article>
        <form>
            <input
                value={search}
                onChange={handleChange}
            />
            <Link to={`/${search}`}>
                <div className="button">Buscar</div>
            </Link>
        </form>
        <p></p>
    </article>
    </>);
};

export default SearchBar;