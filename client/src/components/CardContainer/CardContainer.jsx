import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import "./CardContainer.css";
import Spinner from "../Spinner/Spinner";

const CardContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch])
    const pokemons = useSelector(state => state.pokemons);
    const isLoading = useSelector(state => state.isLoading);
    
    return (<div className="container">
        {
            isLoading ? <Spinner/> : pokemons.map((poke,i) => <Card pokemon={poke} key={i}/>)
        }
    </div>);
};

export default CardContainer;