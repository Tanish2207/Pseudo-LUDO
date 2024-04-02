import TotalMoves from './totalMoves'
import NoSelector from './noSelector'
import GameGrid from './gamegrid'
import ResetRulesDice from './resetRulesDice'
import { useState } from 'react'

function Gameplay() {
  const [selectedNum, setSelectedNum] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
  }
  const roll_the_dice = () => {
    if(!selectedNum){
      setErrorMsg("Please select a number first");
      return;
    }
    setErrorMsg("")
    const randomNum = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNum);
    setSelectedNum(undefined);
  }

  const [isPopupOpen, setPopup] = useState(false);

  return (
    <div>
      <div className=' flex flex-col  md:flex-row md:justify-around pt-4'>
        <TotalMoves />
        <NoSelector errorMsg={errorMsg} selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>
      <div className='pt-10 flex flex-1 flex-col justify-around items-start gap-4 md:flex-row'>
        <GameGrid />
        <div className='flex flex-col gap-4 '>
          <ResetRulesDice currentDice={currentDice} roll_the_dice={roll_the_dice} isPopupOpen={isPopupOpen} setPopup={setPopup} />
        </div>
      </div>
    </div>
  )
}

export default Gameplay