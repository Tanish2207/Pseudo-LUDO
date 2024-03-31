import { useState } from 'react';

const DiceRoll = () => {
    const [currentDice, setCurrentDice] = useState(1);
    const generateRandomNumber = (min, max) => { 
        return (Math.floor(Math.random() * (max - min) + min));
    }
    const changeDiceImg = () => {
        const randomNum = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNum); 
    }

    return (
        <div onClick={changeDiceImg}>
            <img src={`dice_${currentDice}.svg`} alt="" width="130px" />
        </div>
    )
}

export default DiceRoll;