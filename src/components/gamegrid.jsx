import React from 'react'

const gridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const GameGrid = ({ptrToGrid}) => {
    return (
        <div className=' h-full w-auto grid gap-x-0 gap-y-0 mobileGrid'>
            {gridArr.map((value, i) => (
                <div className={"w-24 h-24 grid place-items-center mobileGridBox text-white font-bold text-4xl border " + ((i <= ptrToGrid) ? " selected" : " unselected")} key={i}>{value}</div>


            ))}
        </div>

    )
}

export default GameGrid