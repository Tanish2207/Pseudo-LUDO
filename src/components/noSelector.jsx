import { useState } from "react";

const NoSelector = ({ errorMsg,setErrorMsg, selectedNum, setSelectedNum }) => {

    const arrNum = [1, 2, 3, 4, 5, 6];
    const numSelector = (value) => {
        setSelectedNum(value);
        setErrorMsg("");
    }


    return (
        <div className="flex flex-col gap-2 md:flex-col-reverse md:items-end">
            <p className="text-center text-red-500 text-xl">{errorMsg}</p>
            <p className="text-center font-semibold text-base">Select Number</p>

            <div className=" flex gap-2 justify-center">
                {
                    arrNum.map((value, i) => {
                        // console.log("SelectedNum me " + selectedNum + " ye store hua");
                        const isSelected = (selectedNum === value);

                        return (
                            
                            <div className={"cursor-pointer w-16 h-16 grid place-items-center font-extrabold text-3xl transition-all " + ((isSelected) ? "bg-black text-white" : "bg-white text-black")} style={{ border: "1px solid black" }} key={i} onClick={() => numSelector(value)}>{value}</div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default NoSelector