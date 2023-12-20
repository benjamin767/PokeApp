import React, { useEffect } from "react";
import "./PokemonDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getOnePokemon } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const PokemonDetails = () => {
    const dispatch = useDispatch();
    const { name } = useParams();
    useEffect(() => {
        dispatch(getOnePokemon(name))
    }, [dispatch, name]);
    const pokemon = useSelector(state => state.pokemon);
    const isLoading = useSelector(state => state.isLoading);
    const changeClass = (value) => {
        if(value <= 40) return "rod rodToRed"
        if (value > 40 && value <= 75){
            return "rod rodToYellow";
        }
        if (value > 75){
            return "rod rodToGreen";
        }
    }
    
    const changeBackground = (value) => {
        return {
            backgroundSize: (value - 1) * 150 / (150 - 1) + '% 100%'
        }
    };

    const changeColor = (value) => {
        if(value <= 34) return { color: "#b41f14" }
        if (value > 34 && value <= 64){
            return { color: "#bba415" }
        }
        if (value > 64){
            return { color: "#447a0e"}
        }
    };

    return (
        <>
        { 
            isLoading ? <Spinner/> :
                pokemon.stats && <section className="details">
                    <div className="data_container">
                        <div className="header">
                            <p className="name">{ pokemon.name }</p>
                        </div>
                        <div
                            className="image"
                        >
                            <p>type: <span>{ pokemon.type.name }</span></p> 
                            <img 
                                src={ pokemon.perfil_img }
                                alt={ name }
                            />
                        </div>
                        <div className="data">
                            <div className="stats">
                                <div className="stats-measures">
                                    <p>weight: { (pokemon.weight + "").slice(0,-1) + "," + (pokemon.weight + "").slice(-1) } kg</p>
                                    <p>height: { 
                                        ( (pokemon.height + "").slice(0,-1) ? (pokemon.height + "").slice(0,-1) : 0 ) 
                                        + "," + (pokemon.height + "").slice(-1) 
                                        } m
                                    </p>
                                </div>
                                    { pokemon.stats.map((data, i)=> {
                                    return (<div className="stat-data">
                                        <div className="stat-name">
                                            <label>{ data.stat.name }</label>
                                        </div>  <input 
                                                    className={changeClass(data.base_stat)}
                                                    type="range" 
                                                    min="1" max="150"
                                                    value={data.base_stat}
                                                    style={changeBackground(data.base_stat)}
                                                /> <span style={changeColor(data.base_stat)}>{ data.base_stat }</span>
                                    </div>);
                                    }) }
                            </div>
                        </div>
                    </div>
                    
                </section>
        }
        </>
    );
}

export default PokemonDetails;