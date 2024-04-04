import TotalMoves from './totalMoves'
import NoSelector from './noSelector'
import GameGrid from './gamegrid'
import ResetRulesDice from './resetRulesDice'
import { useEffect, useState } from 'react'

function Gameplay({toggleGameOver, score, setScore}) {
  // States
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [ptrToGrid, setPtrToGrid] = useState(-2);
  const [isPopupOpen, setPopup] = useState(false);
  const [isDiceRolling, setDiceRolling] = useState(false);

  let actualGridPtr = 0;

  // Functions
  const resetScore = () => {
    setScore(0);
    setPtrToGrid(-1);
  }

  const generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
  }


  // **********************************************************************
  const roll_the_dice = () => {
    if (!selectedNum) {
      setErrorMsg("Please select a number first");
      return;

    }

    const randomNum = generateRandomNumber(1, 7);
    // console.log("Current Dice me pehle store hua " + currentDice);
    setCurrentDice((prev) => randomNum);
  }


  useEffect(() => {
    // console.log("CurrentDice me " + currentDice + " ye store hua");
    // console.log("selectedNum me " + selectedNum + " ye store hua");

    // Dice Rolling animation
    setDiceRolling(true);
    setTimeout(() => {
      setDiceRolling(false);
    }, 1000)

    // Timeout for Grid
    setTimeout(() => {
      if (selectedNum == currentDice) {
        setPtrToGrid((prev) => prev + 5);
      }
      else {
        setPtrToGrid((prev) => prev + 1);
      }
      setSelectedNum(undefined);
      setScore((prev) => prev + 1);
    }, 1000)

  }, [currentDice]);

  useEffect(() => {
    actualGridPtr = ptrToGrid;
    setTimeout(() => {
    // console.log("actualGridPtr me " + actualGridPtr + " ye store hua");
    if(actualGridPtr >=19){
      
      toggleGameOver((prev)=>!prev);
    }
  }, 1000)
  }, [ptrToGrid])
  

  return (
    <div>
      
      <div className='flex flex-col  md:flex-row md:justify-around pt-4'>
        <TotalMoves score={score} />
        <NoSelector errorMsg={errorMsg} setErrorMsg={setErrorMsg} selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>
      <div className='pt-10 flex flex-1 flex-col justify-around items-start gap-4 md:flex-row'>
        <GameGrid ptrToGrid={ptrToGrid} />
        <div className='flex flex-col gap-4 '>
          <ResetRulesDice currentDice={currentDice} roll_the_dice={roll_the_dice} isPopupOpen={isPopupOpen} setPopup={setPopup} resetScore={resetScore} isDiceRolling={isDiceRolling} />
        </div>
      </div> 

    </div>

  )
}

export default Gameplay