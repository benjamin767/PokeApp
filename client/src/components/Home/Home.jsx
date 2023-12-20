import React from "react";
import '../../App.css'
import CardContainer from '../CardContainer/CardContainer'
import { Header } from '../Header/Header';
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
    return (
        <div className="App">
            <Header/>
            <SearchBar/>
            <CardContainer/>
        </div>
    );
};

