import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOnePokemon } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ search, setSearch ] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const handleSubmit = (search) => {
        dispatch(getOnePokemon(search));
    }
    return (<>
    <article>
        <form onSubmit={handleSubmit(search)}>
            <input
                value={search}
                onChange={handleChange}
            />
            <input 
                type="button"
                value="Buscar"
            />
        </form>
        <p></p>
    </article>
    </>);
};

export default SearchBar;