import React from "react";
import memesData from './memesData';


const Meme = () => {

  const [memeImage, setMemeImage] = React.useState(" ");
  function getMemeImg(){
    const memes = memesData.data.memes;
    const randomNumbers = Math.floor(Math.random()*memes.length)
    setMemeImage(memes[randomNumbers].url)

  }
  return (
    <div className="meme">
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
        <button onClick= {getMemeImg}>Get a new meme image</button>
      <img src={memeImage} alt='meme'/>
    </div>
  );
};

export default Meme;
