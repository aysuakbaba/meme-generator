import React from "react";
import memesData from './memesData';


const Meme = () => {

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
        <img src={meme.randomImage} alt='meme' className="meme--image"/>  
    </div>
  );
};

export default Meme;
