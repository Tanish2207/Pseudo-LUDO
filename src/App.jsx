import React, { useState } from 'react'
import Landing from './components/landing'
import './App.css';
import Gameplay from './components/gameplay';
import GameOver from './components/game-over';

function App() {
  const [isGameOn, setIsGameOn] = useState(true);
  const [isGameOver, toggleGameOver] = useState(false);
  const [score, setScore] = useState(-1);


  const toggleGameOn = () => {
    setIsGameOn(!isGameOn);
  }

  return (
    <>
    {isGameOn ? ( isGameOver ? <GameOver score={score}/>:<Gameplay toggleGameOver={toggleGameOver} score={score} setScore={setScore} />) : <Landing toggle={toggleGameOn} />}
    
    </>
  )
}

export default App