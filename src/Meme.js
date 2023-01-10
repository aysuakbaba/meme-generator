import React from "react";
import memesData from './memesData';

let url
const Meme = () => {
  function getMemeImg(){
    const memes = memesData.data.memes;
    const randomNumbers = Math.floor(Math.random()*memes.length)
    url = memes[randomNumbers].url
    console.log(url)
  }



  return (
    <div className="meme">
      <form className="meme--form">
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
      </form>
    </div>
  );
};

export default Meme;
