import React from 'react'
import { useState } from 'react';
import Rules from './rules';
import DiceRoll from './dice-roll';


const ResetRulesDice = ({currentDice, roll_the_dice, isPopupOpen, setPopup}) => {
  

  return (
    <div className="flex md:flex-col items-center gap-10">
      <div className='flex flex-col gap-4' >
        <button className=" w-64 py-4 px-8 bg-slate-800 text-white text-lg font-bold rounded-sm hover:bg-slate-700 transition-all" style={{ border: "1px solid black" }}>Reset Score</button>
        <button onClick={() => setPopup((prev) => !prev)} className=" w-64 py-4 px-8 text-black text-lg font-bold rounded-sm hover:bg-slate-700 hover:text-white transition-all" style={{ outline: "1px solid black" }}>Show Rules</button>

        {isPopupOpen && <Rules />}
      </div>
      <div className='flex justify-center items-center flex-col cursor-pointer'>
        {/* <img src="dice_1.svg" alt="" width="130px" /> */}
        <DiceRoll currentDice={currentDice} roll_the_dice={roll_the_dice}/>
        <p>Click on dice to roll</p>
      </div>
    </div>

  )
}

export default ResetRulesDice