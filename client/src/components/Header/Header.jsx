import React from "react";
import logo from '../../pokeball.svg';
import title from '../../pokemon.png';
import './Header.css'

export const Header = () => {
    return (<>
        <header className="App-header">
            <img src={title} className='App-title' alt="title"/>
            <img src={logo} className="App-logo" alt="logo" />
      </header>
    </>)
};