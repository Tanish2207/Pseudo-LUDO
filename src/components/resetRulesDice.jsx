import { useState, useEffect} from 'react';
import Rules from './rules';
import DiceRoll from './dice-roll';
import LoadingDice from './loading_dice';


const ResetRulesDice = ({ currentDice, setCurrentDice, roll_the_dice, isPopupOpen, setPopup, resetScore, isDiceRolling }) => {




  return (
    <div className="flex md:flex-col items-center ml-2 gap-10">
      <div className='flex flex-col gap-4' >
        <button className=" w-64 py-4 px-8 bg-slate-800 text-white text-lg font-bold rounded-sm hover:bg-slate-700 transition-all" style={{ border: "1px solid black" }} onClick={resetScore}>Reset Score</button>
        <button onClick={() => setPopup((prev) => !prev)} className=" w-64 py-4 px-8 text-black text-lg font-bold rounded-sm hover:bg-slate-700 hover:text-white transition-all" style={{ outline: "1px solid black" }}>Show Rules</button>

        {isPopupOpen && <Rules />}
      </div>
      <div className='flex justify-center items-center flex-col cursor-pointer mr-2'>
        {isDiceRolling ? <LoadingDice /> : <DiceRoll currentDice={currentDice} setCurrentDice={setCurrentDice} roll_the_dice={roll_the_dice} />}
        {/* <DiceRoll currentDice={currentDice} setCurrentDice={setCurrentDice} roll_the_dice={roll_the_dice} />
        {isDiceRolling && <LoadingDice />} */}
        <p className='text-sm font-semibold'>Click on dice to roll</p>
      </div>
    </div>

  )
}

export default ResetRulesDice