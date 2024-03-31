import React from 'react'

const Landing = ({ toggle }) => {
    return (
        <div className=" h-full bg-slate-900">
            <div className="fixed inset-0 overflow-auto flex flex-col justify-center items-center md:flex-row">
                <div>
                    <img src="dices.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-black text-4xl mb-16">Psuedo - LUDO</h2>
                    <button onClick={toggle} className="py-4 px-8 bg-slate-800 text-white text-base font-bold rounded-lg hover:bg-slate-700 transition-all">Play Now</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
