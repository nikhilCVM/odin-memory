import React from "react";

export default function ScoreBoard({ score, highScore }) {
    return (
        <div className="score-board">
        <h2>Score: {score}</h2>
        <h2>BestScore: {highScore}</h2>
        </div>
    );
}