import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Cards';
import { motion } from 'framer-motion';

import ScoreBoard from './ScoreBoard';

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);  // ✅ Initialize as an empty array
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
      const data = res.data.results.map((item, index) => ({
        id: index,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));
      setCards(data);
    }
    fetchData();
  }, []);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);  // Reset game
    } else {
      setClickedCards((prevClicked) => [...prevClicked, id]);  // ✅ Correct way to update state
      setScore((prevScore) => prevScore + 1);
      setHighScore((prevBestScore) => Math.max(prevBestScore, score + 1));
    }
    shuffleCards();
  };

  return (
    <div>
      <ScoreBoard score={score} highScore={highScore} />
      <motion.div className="gameboard" layout>
        {cards.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
        ))}
      </motion.div>
    </div>
  );
};

export default GameBoard;
