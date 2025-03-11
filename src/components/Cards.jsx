import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';
const Cards=({pokemon, handleClick})=>{
    const [flipped, setFlipped] = useState(false); 
    const handleCardClick = () => {
        setFlipped(true);
        setTimeout(() => {
        setFlipped(false);
        handleClick(pokemon.id);
        }, 500); // Flip animation duration
      }; 
    return(
        <motion.div
        className="card"
        onClick={handleCardClick}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.1}} // ✅ Adds hover effect
      >
        <img src={pokemon.image} alt={pokemon.name}/>
        <p>{pokemon.name}</p>

    </motion.div>
    
    )

}
export default Cards;