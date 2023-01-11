import React from "react";
import memesData from './memesData';


const Meme = (props) => {

  const [meme, setMeme] = React.useState({
    topText: "lkjsgdkslg",
    bottomText : "dkgjdslkgjs",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages , setAllMmemeImages] = React.useState(memesData)




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
    <div className="meme" style={styles}>
        <div className="form--top">
          <input
            type="text"
            id="first-line"
            name="fline"
            placeholder="First Line"
          ></input>
          <input
            type="text"
            id="second-line"
            name="sline"
            placeholder="Second Line"
          ></input>
        </div>  
        <button onClick= {getMemeImg} style={buttonStyle}>Get a new meme image</button>
        <img src={meme.randomImage} alt='meme' className="meme--image"/>  
    </div>
  );
};

export default Meme;
