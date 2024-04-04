const DiceRoll = ({currentDice, roll_the_dice}) => {
    


    return (
        <div onClick={roll_the_dice}>
            <img src={`dice_${currentDice}.svg`} className='dice-image ' width="130px" />
        </div>
    )
}

export default DiceRoll;