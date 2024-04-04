import React from 'react'

// Write numbers 20 to 1 separated by commas
const gridArr = [20, 19, 18, 17, 16, 11, 12, 13, 14, 15, 10, 9, 8, 7, 6, 1, 2, 3, 4, 5];
const GameGrid = ({ ptrToGrid }) => {
    return (
        <div className='pb-6 w-full flex justify-center items-center md:w-auto'>
            <div className='grid gap-x-0 gap-y-0 mobileGrid'>
                {gridArr.map((value, i) => (
                    <div className={"grid place-items-center mobileGridBox text-white font-bold text-3xl md:text-4xl border " + (((value-1) <= ptrToGrid) ? " selected" : " unselected")} key={i}>{value}</div>
                ))}
            </div>
        </div>
    )
}

export default GameGrid