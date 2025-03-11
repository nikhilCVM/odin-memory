import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";


export default function App(){
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  return(
    <>
    <div>
      
      <Header/>
      
      <GameBoard/>
      
    </div>
    </>
  )

}