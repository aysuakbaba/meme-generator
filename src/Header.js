import React from "react";
import troll from './assets/Troll Face.png'

const Header = ()=> {
    return(
        <div className="header">
            <div className="header--left">
                <img src={troll} alt='troll face'></img>
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <div className="header--right">
                <h3>React Course - Project 3</h3>
            </div>
        </div>

    )
}











export default Header;