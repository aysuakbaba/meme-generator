import React from "react";

const Meme = () => {
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
        <button>Get a new meme image</button>
      </form>
    </div>
  );
};

export default Meme;
