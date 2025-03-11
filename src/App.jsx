import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import GameBoard from "./components/GameBoard";


export default function App(){
 
  return(
    <>
    <div>
      
      <Header/>
      
      <GameBoard/>
      
    </div>
    </>
  )

}