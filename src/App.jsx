import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import GameBoard from "./components/GameBoard";


export default function App(){
 
  return(
    <>
    <div>
      
      <Header/>
      <h1>Memory Game</h1>
      
      <GameBoard/>
      
    </div>
    </>
  )

}