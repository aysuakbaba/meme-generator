import React from "react";
import memesData from './memesData';


const Meme = (props) => {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText : "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value

    }))


  }

  const [allMemeImages , setAllMemeImages] = React.useState(memesData)




  function getMemeImg(){
    const memes = allMemeImages.data.memes;
    const randomNumbers = Math.floor(Math.random()*memes.length)
    const url = memes[randomNumbers].url;
    setMeme((prevMeme) => ({
      
        ...prevMeme,
        randomImage : url
      
    }))
    

  }

  const styles = {
    backgroundColor : props.darkMode ? "#144272" : "#FFA1CF",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px"
  }

  const buttonStyle = {
    backgroundColor : props.darkMode ? "#91D8E4" : "#FFD6EC",
    width: "800px",
    height:" 50px",
    borderRadius: "8px",
    border:"none",   
    fontFamily: "'Kodchasan', sans-serif",
    fontSize: "20px",
    fontWeight:"700",
    cursor: "pointer"
  }
  return (
    <div style={styles}>
        <div className="form--top">
          <div className="top-input">
          <input
            type="text"
            id="first-line"
            name="topText"
            placeholder="First Line"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            id="second-line"
            name="bottomText"
            placeholder="Second Line"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
          </div>
          <button onClick= {getMemeImg} style={buttonStyle}>Get a new meme image</button>

        </div>  
        <div className="meme">
        <img src={meme.randomImage} alt='meme' className="meme--image"/> 
        <h2 className="meme-text top">{meme.topText}</h2> 
        <h2 className="meme-text bottom">{meme.bottomText}</h2> 

        </div>
    </div>
  );
};

export default Meme;
