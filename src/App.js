import React from "react";
import Header from "./Header";
import Meme from "./Meme";


function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  const styles = {
    backgroundColor : darkMode ? "#144272" : "#FFA1CF",
    height : "100vh"

  }
  return (
    <div className="App" style={styles}>
      <Header toggleMode={toggleMode} darkMode={darkMode}/>
      <Meme darkMode={darkMode}/>

      
    </div>
  );
}

export default App;
