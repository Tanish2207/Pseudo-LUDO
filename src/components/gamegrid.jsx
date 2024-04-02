import React from 'react'

const gridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const GameGrid = () => {
    return (
        <div className=' h-full w-auto grid gap-x-0 gap-y-0' style={{ gridTemplateColumns: "repeat(5, 6rem)", gridTemplateRows: "repeat(4, 6rem)" }}>
            {gridArr.map((value, i) => (<div className='w-24 h-24 bg-slate-500 grid place-items-center text-white font-bold text-4xl border' key={i}>{value}</div>))}
        </div>

    )
}

export default GameGrid