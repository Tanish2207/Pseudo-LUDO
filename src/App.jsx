import React, { useState } from 'react'
import Landing from './components/landing'
import './App.css';
import Gameplay from './components/gameplay';

function App() {
  const [isGameOn, setIsGameOn] = useState(true);
  const toggleGameOn = () => {
    setIsGameOn(!isGameOn);
  }

  return (
    <>
    {isGameOn ? <Gameplay /> : <Landing toggle={toggleGameOn} />}

    </>
  )
}

export default App