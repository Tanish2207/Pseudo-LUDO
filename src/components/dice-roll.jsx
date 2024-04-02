import { useState } from 'react';

const DiceRoll = ({currentDice, roll_the_dice}) => {
    


    return (
        <div onClick={roll_the_dice}>
            <img src={`dice_${currentDice}.svg`} alt="" width="130px" />
        </div>
    )
}

export default DiceRoll;