import React from 'react'
import "./App.css";
import Cont1 from "./components/Cont1";
import Cont2 from "./components/Cont2";

function App() {
  return (
    <div className="App">
      <div className="Cont2">
        <Cont1 />
      </div>
      <div className="Cont1">
        <Cont2 />
      </div>
    </div>
  );
}

export default App;


