import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createDictionary(emojipedias){
  return <Entry 
  
  key={emojipedias.id}
  emoji={emojipedias.emoji}
  name={emojipedias.name}
  meaning={emojipedias.meaning}
  
  />
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
     
      {emojipedia.map(createDictionary)}
      </div>
  
  );
}

export default App;
