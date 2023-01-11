import React from "react";
import troll from './assets/Troll Face.png'
import darkModebutton from './assets/night-mode.png'

const Header = (props) => {

    const titleStyles = {
        color: props.darkMode ? "white" : "black"
    }

    const headerStyle={
        backgroundColor: props.darkMode ? "#0A2647" : "#FF74B1",     
        height:"80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
    }


    return(
        <div className="header" style={headerStyle}>
            <div className="header--left">
                <img src={troll} alt='troll face'></img>
                <h1 className="header--title" style={titleStyles}>Meme Generator</h1>
            </div>
            <div className="header--right">
                <button className="darkMode" onClick={props.toggleMode}><img className="darkModeBut" src={darkModebutton} alt="darkMode"/></button>
                <h3 style={titleStyles}>React Course - Project 3</h3>
            </div>
        </div>

    )
}











export default Header;